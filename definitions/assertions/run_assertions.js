// Ensures these tables are not empty
// MerchantDB
assertions.assertNotEmpty("ext_Dealers");
assertions.assertNotEmpty("ext_DealersStores");
assertions.assertNotEmpty("ext_Roles");
assertions.assertNotEmpty("ext_Users");
assertions.assertNotEmpty("ext_MerchantRoles");

// LoansDB lookups
assertions.assertNotEmpty("ext_InstallmentsStatusLookups");
assertions.assertNotEmpty("ext_InstallmentsSourcesLookups");
assertions.assertNotEmpty("ext_InstallmentsDetailsStatusLookups");
assertions.assertNotEmpty("ext_InstallmentItemsStatusLookups");
assertions.assertNotEmpty("ext_DepositsStatusLookups");
assertions.assertNotEmpty("ext_DepositsTypesLookups");
assertions.assertNotEmpty("ext_PromoStageLookups");
assertions.assertNotEmpty("ext_PromotionsTypesLookups");
assertions.assertNotEmpty("ext_RequestStatuses");
assertions.assertNotEmpty("LookupInstallmentStatus");
assertions.assertNotEmpty("LookupInstallmentSources");
assertions.assertNotEmpty("ext_InstallmentDetails");
assertions.assertNotEmpty("LookupInstallmentDetailsStatus");
assertions.assertNotEmpty("LookupInstallmentItemStatus");
assertions.assertNotEmpty("ext_InstallmentItems");
assertions.assertNotEmpty("ext_Deposits");
assertions.assertNotEmpty("LookupDepositsTypes");
assertions.assertNotEmpty("LookupDepositsStatus");
assertions.assertNotEmpty("ext_Installments");
