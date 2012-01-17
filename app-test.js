Ext.Loader.setConfig({enabled: true,
        paths: {
            'Ext.ux':'../extjs4/ux/',
            'AM': 'app'
        }
});
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
]);

var Application = null;

Ext.onReady(function() {
    Application = Ext.create('Ext.app.Application', {
        name: 'AM',

        controllers: [
            'Users'
        ],

        launch: function() {
            //include the tests in the test.html head
            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
            jasmine.getEnv().execute();
        }
    });
});
