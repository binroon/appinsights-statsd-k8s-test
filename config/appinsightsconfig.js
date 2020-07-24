{
    backends: ["./backends/appinsights"],  // [Required] The Application Insighst StatsD backend
    aiInstrumentationKey: "0e7e5a42-4ff6-4102-91b5-f38bbad6dadf",  // [Required] Your instrumentation key
    aiPrefix: "my_prefix",  // [Optional] Send only metrics with this prefix
    aiRoleName: "my_role_name",  // [Optional] Add this role name context tag to every metric
    aiRoleInstance: "my_role_instance",  // [Optional] Add this role instance context tag to every metric
    aiTrackStatsDMetrics: true,  // [Optional] Send StatsD internal metrics to Application Insights
    debug: true
}