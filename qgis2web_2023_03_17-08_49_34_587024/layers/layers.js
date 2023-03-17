var wms_layers = [];

var format_ss_parcelles_2023_0 = new ol.format.GeoJSON();
var features_ss_parcelles_2023_0 = format_ss_parcelles_2023_0.readFeatures(json_ss_parcelles_2023_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ss_parcelles_2023_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ss_parcelles_2023_0.addFeatures(features_ss_parcelles_2023_0);
var lyr_ss_parcelles_2023_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ss_parcelles_2023_0, 
                style: style_ss_parcelles_2023_0,
                interactive: true,
                title: '<img src="styles/legend/ss_parcelles_2023_0.png" /> ss_parcelles_2023'
            });

lyr_ss_parcelles_2023_0.setVisible(true);
var layersList = [lyr_ss_parcelles_2023_0];
lyr_ss_parcelles_2023_0.set('fieldAliases', {'SS_PARCELL': 'SS_PARCELL', });
lyr_ss_parcelles_2023_0.set('fieldImages', {'SS_PARCELL': '', });
lyr_ss_parcelles_2023_0.set('fieldLabels', {'SS_PARCELL': 'header label', });
lyr_ss_parcelles_2023_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});