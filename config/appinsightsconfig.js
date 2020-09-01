{
    backends: ["appinsights-statsd"],  // [Required] The Application Insighst StatsD backend
    aiInstrumentationKey: process.env.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY,  // [Required] Your instrumentation key
    aiPrefix: "airflow",  // [Optional] Send only metrics with this prefix
    aiRoleName: "airflow",  // [Optional] Add this role name context tag to every metric
    aiRoleInstance: "airflow",  // [Optional] Add this role instance context tag to every metric
    aiTrackStatsDMetrics: true,  // [Optional] Send StatsD internal metrics to Application Insights
    log: {
        backend: "syslog",    // where to log: stdout or syslog [string, default: stdout]
        level: ""       // log level for [node-]syslog [string, default: LOG_INFO]
    },
    debug: true
}
