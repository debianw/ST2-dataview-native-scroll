/**
 *
 */

Ext.define('app.view.Main', {
  extend: 'Ext.Panel',
  xtype: 'main',

  requires: [
    'Ext.dataview.DataView',
    'Ext.data.Store'
  ],
  
  config: {

    layout: {
      type: 'fit'
    },

    items: [
      {
        xtype: 'toolbar',
        docked: 'top',
        title: 'Native iOS Scroller',
      },
      {
        id: 'listing',
        xtype: 'dataview',
        scrollable: null,
        style: 'overflow-y: scroll; -webkit-overflow-scrolling: touch;',
        itemTpl: [
          '<div class"item" style="padding:20px;border-bottom:1px solid #cccccc">',
            '{name}',
          '</div>'
        ].join(''),
      },
      {
        xtype: 'toolbar',
        docked: 'bottom'
      }
    ]
  },

  /**
   *
   */

  initialize: function () {
    var List
      , data = [];

    this.callParent(arguments);

    List = this.down('dataview');

    for (var i = 0; i < 500; i++) {
      data.push({
        name: 'Item ' + i
      });
    }

    List.setData(data);
  }

});
