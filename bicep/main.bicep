targetScope = 'subscription'

@description('Location for all resources.')
param location string = 'uksouth'

@description('The name of the container registry resource group.')
param containerRegistryResourceGroupName string

@description('The name of the container registry.')
param containerRegistryName string

@description('The name of the container image.')
param containerRegistryImageName string

var appName = 'antonigaudi'

var resourceGroupName = 'rg-${appName}-uks-001'
var logAnalyticsName = 'log-${appName}-uks-001'
var applicationInsightName = 'appi-${appName}-uks-001'
var containerAppEnvName = 'cae-${appName}-uks-001'
var containerAppName = 'ca-${appName}-uks-001'
var userAssignedIdentityName = 'id-${appName}-uks-001'

resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-01-01' = {
  name: resourceGroupName
  location: location
}

module logAnalytics 'modules/logAnalytics.bicep' = {
  name: logAnalyticsName
  scope: resourceGroup
  params: {
    logAnalyticsName: logAnalyticsName
    location: resourceGroup.location
  }
}

module applicationInsights 'modules/applicationInsights.bicep' = {
  name: applicationInsightName
  scope: resourceGroup
  params: {
    applicationInsightName: applicationInsightName
    logAnalyticsId: logAnalytics.outputs.id
    location: resourceGroup.location
  }
}

module containerAppEnv 'modules/containerAppEnvironment.bicep' = {
  name: containerAppEnvName
  scope: resourceGroup
  params: {
    containerAppEnvName: containerAppEnvName
    logAnalyticsName: logAnalyticsName
    location: resourceGroup.location
  }
}

module containerRegistryManagedIdentity 'modules/containerManagedIdentity.bicep' = {
  name: userAssignedIdentityName
  scope: resourceGroup
  params: {
    userAssignedIdentityName: userAssignedIdentityName
    location: resourceGroup.location
  }
}

module containerRegistryRoleAssignment 'modules/containerRegistryRoleAssignment.bicep' = {
  name: '${userAssignedIdentityName}-role-assignment'
  scope: az.resourceGroup(containerRegistryResourceGroupName)
  params: {
    containerRegistryName: containerRegistryName
    containerRegistryUserAssignedIdentityPrincipleId: containerRegistryManagedIdentity.outputs.principleId
  }
}

module containerApp 'modules/containerApp.bicep' = {
  name: containerAppName
  scope: resourceGroup
  params: {
    containerAppName: containerAppName
    containerAppEnvName: containerAppEnvName
    location: resourceGroup.location
    userAssignedIdentityId: containerRegistryManagedIdentity.outputs.id
    containerRegistryName: containerRegistryName
    containerImage: containerRegistryImageName
    targetPort: 3000
    cpuCore: '0.25'
    memorySize: '0.5'
    minReplicas: 0
    maxReplicas: 10
  }
}
