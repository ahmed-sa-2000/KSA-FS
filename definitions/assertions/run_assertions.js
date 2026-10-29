// Ensures these tables are not empty
// MerchantDB
// assertions.assertNotEmpty("int_dealers");
// assertions.assertNotEmpty("int_dealersstores");
// assertions.assertNotEmpty("int_users");
assertions.assertNotEmpty("ext_roles");
assertions.assertNotEmpty("int_merchantroles");
assertions.assertNotEmpty("LookupDealers");
assertions.assertNotEmpty("DimDealersStores");
assertions.assertNotEmpty("DimMerchantUsers");

// LoansDB 
// assertions.assertNotEmpty("int_installmentdetails");
// assertions.assertNotEmpty("int_installmentitems");
// assertions.assertNotEmpty("int_deposits");
// assertions.assertNotEmpty("int_installments");
assertions.assertNotEmpty("ext_installmentsstatuslookups");
assertions.assertNotEmpty("ext_installmentssourceslookups");
assertions.assertNotEmpty("ext_installmentsdetailsstatuslookups");
assertions.assertNotEmpty("ext_installmentitemsstatuslookups");
assertions.assertNotEmpty("ext_depositsstatuslookups");
assertions.assertNotEmpty("ext_depositstypeslookups");
assertions.assertNotEmpty("ext_requeststatuses");
assertions.assertNotEmpty("LookupInstallmentStatus");
assertions.assertNotEmpty("LookupInstallmentSources");
assertions.assertNotEmpty("LookupDepositsStatus");
assertions.assertNotEmpty("LookupDepositsTypes");
assertions.assertNotEmpty("LookupInstallmentDetailsStatus");
assertions.assertNotEmpty("LookupInstallmentItemStatus");
assertions.assertNotEmpty("FactInstallmentDetails");

// PromotionDB
// assertions.assertNotEmpty("int_promotions");
// assertions.assertNotEmpty("int_promomerchants");
assertions.assertNotEmpty("ext_promotiontypeconfigs");
assertions.assertNotEmpty("ext_promotiontypes");
assertions.assertNotEmpty("ext_promostagelookups");
assertions.assertNotEmpty("ext_promotionstypeslookups");
assertions.assertNotEmpty("DimPromotionTypes");
assertions.assertNotEmpty("LookupPromoStage");
assertions.assertNotEmpty("LookupPromotionTypeConfig");
