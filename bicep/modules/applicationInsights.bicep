@description('The name of the Application Insights resource.')
param applicationInsightName string

@description('The Id of the Log Analytics Workspace.')
param logAnalyticsId string

@description('Location for all resources.')
param location string = resourceGroup().location

resource applicationInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: applicationInsightName
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: logAnalyticsId
  }
}
