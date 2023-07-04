# Get the "Company Administrator" role
$role = Get-AzureADDirectoryRole | Where-Object {$_.DisplayName -eq "Company Administrator"}

# Get the members of the "Company Administrator" role
$members = Get-AzureADDirectoryRoleMember -ObjectId $role.ObjectId

# Display the list of domain administrators
$members | Select-Object -Property DisplayName, UserPrincipalName
