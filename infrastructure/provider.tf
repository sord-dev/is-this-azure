provider "azurerm" {
  features {}
  subscription_id = "30df9e49-5998-4aeb-98fc-d198dec00b91"
  tenant_id = "08400484-849d-422e-8c15-79a4755a7773"
}

# Set the Azure Provider source and version being used
terraform {
  required_version = ">= 0.14"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.12.0"
    }
  }
}