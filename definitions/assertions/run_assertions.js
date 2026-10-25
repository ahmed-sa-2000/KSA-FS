// Ensures these tables are not empty
// MerchantDB
assertions.assertNotEmpty("ext_Dealers");
assertions.assertNotEmpty("ext_DealersStores");
assertions.assertNotEmpty("ext_Roles");
assertions.assertNotEmpty("ext_Users");
assertions.assertNotEmpty("ext_MerchantRoles");
assertions.assertNotEmpty("LookupDealers");
assertions.assertNotEmpty("DimDealersStores");
assertions.assertNotEmpty("DimMerchantUsers");

// LoansDB 
assertions.assertNotEmpty("ext_InstallmentsStatusLookups");
assertions.assertNotEmpty("ext_InstallmentsSourcesLookups");
assertions.assertNotEmpty("ext_InstallmentsDetailsStatusLookups");
assertions.assertNotEmpty("ext_InstallmentItemsStatusLookups");
assertions.assertNotEmpty("ext_DepositsStatusLookups");
assertions.assertNotEmpty("ext_DepositsTypesLookups");
assertions.assertNotEmpty("ext_RequestStatuses");
assertions.assertNotEmpty("ext_InstallmentDetails");
assertions.assertNotEmpty("ext_InstallmentItems");
assertions.assertNotEmpty("ext_Deposits");
assertions.assertNotEmpty("ext_Installments");
assertions.assertNotEmpty("LookupInstallmentStatus");
assertions.assertNotEmpty("LookupInstallmentSources");
assertions.assertNotEmpty("LookupDepositsStatus");
assertions.assertNotEmpty("LookupDepositsTypes");
assertions.assertNotEmpty("LookupInstallmentDetailsStatus");
assertions.assertNotEmpty("LookupInstallmentItemStatus");
assertions.assertNotEmpty("FactInstallmentDetails");

// PromotionDB
assertions.assertNotEmpty("ext_PromotionTypeConfigs");
assertions.assertNotEmpty("ext_PromotionTypes");
assertions.assertNotEmpty("ext_PromoStageLookups");
assertions.assertNotEmpty("ext_PromotionsTypesLookups");
assertions.assertNotEmpty("ext_Promotions");
assertions.assertNotEmpty("ext_PromoMerchants");
assertions.assertNotEmpty("DimPromotionTypes");
assertions.assertNotEmpty("LookupPromoStage");
assertions.assertNotEmpty("LookupPromotionTypeConfig");