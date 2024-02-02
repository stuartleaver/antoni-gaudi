@description('The name of the container registry.')
param containerRegistryName string

@description('The Principle Id of the Managed Identity.')
param containerRegistryUserAssignedIdentityPrincipleId string

var containerRegistryPullRoleGuid='7f951dda-4ed3-4680-a7ca-43fe172d538d'

resource containerRegistry 'Microsoft.ContainerRegistry/registries@2023-01-01-preview' existing = {
  name: containerRegistryName
}

resource containerRegistryPullRoleAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(resourceGroup().id, containerRegistryUserAssignedIdentityPrincipleId, containerRegistryPullRoleGuid) 
  scope: containerRegistry
  properties: {
    principalId: containerRegistryUserAssignedIdentityPrincipleId
    roleDefinitionId: resourceId('Microsoft.Authorization/roleDefinitions', containerRegistryPullRoleGuid)
    principalType: 'ServicePrincipal'
  }
}
