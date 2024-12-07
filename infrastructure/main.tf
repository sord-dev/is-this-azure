
resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}

resource "azurerm_service_plan" "asp" {
  name                = var.app_service_plan_name
  resource_group_name = var.resource_group_name
  location            = var.location
  sku_name = var.app_service_sku
  os_type             = var.app_service_os_type
}

resource "azurerm_windows_web_app" "wa" {
  name                = var.app_service_name
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.location
  service_plan_id     = azurerm_service_plan.asp.id
  site_config {
    always_on = false
  }
}