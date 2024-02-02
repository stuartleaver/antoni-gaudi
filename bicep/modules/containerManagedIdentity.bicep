@description('The name of the Managed Identity.')
param userAssignedIdentityName string

@description('Location for all resources.')
param location string = resourceGroup().location

resource containerRegistryUserAssignedIdentity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: userAssignedIdentityName
  location: location
}

@description('The Id of the Managed Identity.')
output id string = containerRegistryUserAssignedIdentity.id

@description('The Principle Id of the Managed Identity.')
output principleId string = containerRegistryUserAssignedIdentity.properties.principalId
