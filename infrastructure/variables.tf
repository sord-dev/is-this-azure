variable "resource_group_name" {
    description = "The name of the resource group in which the resources will be created."
    type = string
    default = "resource-group-01"
}

variable "location" {
    description = "The Azure region in which the resources will be created."
    type = string
    default = "UK South"
}


variable "app_service_plan_name" {
    description = "The name of the App Service Plan."
    type = string
    default = "app-service-plan-01"
}

variable "app_service_name" {
    description = "The name of the App Service."
    type = string
    default = "app-service-02"
}

variable "app_service_sku" {
    description = "The SKU of the App Service."
    type = string
    default = "F1"
}

variable "app_service_os_type" {
    description = "The OS type of the App Service."
    type = string
    default = "Windows"
}