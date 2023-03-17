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
    title: 'ss_parcelles_2023<br />\
    <img src="styles/legend/ss_parcelles_2023_0_0.png" /> Jachere<br />\
    <img src="styles/legend/ss_parcelles_2023_0_1.png" /> JVSP1<br />\
    <img src="styles/legend/ss_parcelles_2023_0_2.png" /> JVSP2<br />\
    <img src="styles/legend/ss_parcelles_2023_0_3.png" /> Production<br />\
    <img src="styles/legend/ss_parcelles_2023_0_4.png" /> <br />'
        });

lyr_ss_parcelles_2023_0.setVisible(true);
var layersList = [lyr_ss_parcelles_2023_0];
lyr_ss_parcelles_2023_0.set('fieldAliases', {'SS_PARCELL': 'SS_PARCELL', 'R_export_Qgis_2023_CHATEAU': 'R_export_Qgis_2023_CHATEAU', 'R_export_Qgis_2023_CEPAGE': 'R_export_Qgis_2023_CEPAGE', 'R_export_Qgis_2023_ANNEE_PLANTATION': 'R_export_Qgis_2023_ANNEE_PLANTATION', 'R_export_Qgis_2023_SURFACE_PRATIQUE_HA': 'R_export_Qgis_2023_SURFACE_PRATIQUE_HA', 'R_export_Qgis_2023_NB_PIEDS': 'R_export_Qgis_2023_NB_PIEDS', 'R_export_Qgis_2023_ETAT': 'R_export_Qgis_2023_ETAT', 'R_export_Qgis_2023_ANNEE_ARRACHAGE': 'R_export_Qgis_2023_ANNEE_ARRACHAGE', 'R_export_Qgis_2023_PORTE_GREFFE': 'R_export_Qgis_2023_PORTE_GREFFE', 'R_export_Qgis_2023_INTER_PIED': 'R_export_Qgis_2023_INTER_PIED', 'R_export_Qgis_2023_INTER_RANG': 'R_export_Qgis_2023_INTER_RANG', 'R_export_Qgis_2023_DENSITE': 'R_export_Qgis_2023_DENSITE', 'R_export_Qgis_2023_CONFUSION': 'R_export_Qgis_2023_CONFUSION', });
lyr_ss_parcelles_2023_0.set('fieldImages', {'SS_PARCELL': 'TextEdit', 'R_export_Qgis_2023_CHATEAU': 'TextEdit', 'R_export_Qgis_2023_CEPAGE': 'TextEdit', 'R_export_Qgis_2023_ANNEE_PLANTATION': 'Range', 'R_export_Qgis_2023_SURFACE_PRATIQUE_HA': 'TextEdit', 'R_export_Qgis_2023_NB_PIEDS': 'Range', 'R_export_Qgis_2023_ETAT': 'TextEdit', 'R_export_Qgis_2023_ANNEE_ARRACHAGE': 'Range', 'R_export_Qgis_2023_PORTE_GREFFE': 'TextEdit', 'R_export_Qgis_2023_INTER_PIED': 'TextEdit', 'R_export_Qgis_2023_INTER_RANG': 'TextEdit', 'R_export_Qgis_2023_DENSITE': 'TextEdit', 'R_export_Qgis_2023_CONFUSION': 'Range', });
lyr_ss_parcelles_2023_0.set('fieldLabels', {'SS_PARCELL': 'inline label', 'R_export_Qgis_2023_CHATEAU': 'no label', 'R_export_Qgis_2023_CEPAGE': 'inline label', 'R_export_Qgis_2023_ANNEE_PLANTATION': 'no label', 'R_export_Qgis_2023_SURFACE_PRATIQUE_HA': 'inline label', 'R_export_Qgis_2023_NB_PIEDS': 'no label', 'R_export_Qgis_2023_ETAT': 'no label', 'R_export_Qgis_2023_ANNEE_ARRACHAGE': 'no label', 'R_export_Qgis_2023_PORTE_GREFFE': 'no label', 'R_export_Qgis_2023_INTER_PIED': 'no label', 'R_export_Qgis_2023_INTER_RANG': 'no label', 'R_export_Qgis_2023_DENSITE': 'no label', 'R_export_Qgis_2023_CONFUSION': 'no label', });
lyr_ss_parcelles_2023_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});