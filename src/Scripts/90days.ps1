$InactiveDays = 90
$Days = (Get-Date).Adddays(-($InactiveDays))
  

Get-ADUser -Filter {LastLogonTimeStamp -lt $Days -and enabled -eq $true} -SearchBase 'OU=SALES,DC=SHELLPRO,DC=LOCAL' -Properties LastLogonTimeStamp |
  
select-object Name,@{Name="Date"; Expression={[DateTime]::FromFileTime($_.lastLogonTimestamp).ToString('MM-dd-yyyy')}} | export-csv C:\inactive_Users.csv -notypeinformation