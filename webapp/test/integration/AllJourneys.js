jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"com/sap/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"com/sap/test/integration/pages/Worklist",
		"com/sap/test/integration/pages/Object",
		"com/sap/test/integration/pages/NotFound",
		"com/sap/test/integration/pages/Browser",
		"com/sap/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.view."
	});

	sap.ui.require([
		"com/sap/test/integration/WorklistJourney",
		"com/sap/test/integration/ObjectJourney",
		"com/sap/test/integration/NavigationJourney",
		"com/sap/test/integration/NotFoundJourney",
		"com/sap/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});
