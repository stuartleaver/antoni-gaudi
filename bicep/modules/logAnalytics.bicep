@description('The name of the Log Analytics Workspace.')
param logAnalyticsName string

@description('Location for all resources.')
param location string = resourceGroup().location

resource logAnalytics 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
  name: logAnalyticsName
  location: location
  properties: {
    sku: {
      name: 'PerGB2018'
    }
  }
}

@description('The resource ID of the Log Analytics Workspace.')
output id string = logAnalytics.id
