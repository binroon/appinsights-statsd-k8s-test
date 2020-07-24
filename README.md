# Application Insights backend StatsD in kubernetes environment
This environment give you a chance to test application insights backend statsd in kubernetes cluster. You will be able to send data from the test client container, and see data going through Azure Application Insights.

In this environment are 2 pods and 1 service created. 2 pods are one for statsd server, the other one for test client. The service provides external access to statsd server.

# Prerequisition
- Azure Application Insights Instrumentation Key
- Kubernetes Cluster, e.g. AKS

# Deployment
- connect to your kubernetes cluster
```
az aks get-credentials --resource-group rg_name --name cluster_name
```
- git clone this repo to your local folder
```
cd path/to/workspace
git clone https://github.com/binroon/osdu.git
```
- deploy with configmap
Update config/appinsightsconfig.js file with your Azure Application Insights Instrumentation Key
```
kubectl create configmap statsd-config --from-file=config
kubectl apply -f statsd-test.yaml
```

# Deployment Result
- use below commands to check your deployment
```
kubectl get nodes
kubectl get services
kubectl get pods
kubectl get deployments
```
# Usage
- log into test-client container
```
kubectl exec -it appinsights-statsd-test-client sh
```
- send data
```
echo "my_prefix.t1:4.5|ms" | nc -u -w0 <statsd-server-ip> 8125 &
echo "my_prefix.t2:4.5|ms" | nc -u -w0 <statsd-server-ip> 8125 &
echo "my_prefix.c1:4.5|c" | nc -u -w0 <statsd-server-ip> 8125 &
echo "my_prefix.g1:4.5|g" | nc -u -w0 <statsd-server-ip> 8125 &
```
- query result from Azure Application Insights 
```
customMetrics 
| where timestamp > ago(5m) 
| limit 10
```
# delete resource
```
kubectl delete -f statsd-test.yaml
```