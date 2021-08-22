var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_car_1 = new ol.layer.Tile({
            'title': 'car',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Calorporzonas_2 = new ol.format.GeoJSON();
var features_Calorporzonas_2 = format_Calorporzonas_2.readFeatures(json_Calorporzonas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calorporzonas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calorporzonas_2.addFeatures(features_Calorporzonas_2);
var lyr_Calorporzonas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Calorporzonas_2, 
                style: style_Calorporzonas_2,
                interactive: false,
    title: 'Calor por zonas<br />\
    <img src="styles/legend/Calorporzonas_2_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Calorporzonas_2_1.png" /> 0 - 0<br />\
    <img src="styles/legend/Calorporzonas_2_2.png" /> 0 - 0<br />\
    <img src="styles/legend/Calorporzonas_2_3.png" /> 0 - 2<br />\
    <img src="styles/legend/Calorporzonas_2_4.png" /> 2 - 3<br />'
        });
var format_peligroestructura_3 = new ol.format.GeoJSON();
var features_peligroestructura_3 = format_peligroestructura_3.readFeatures(json_peligroestructura_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_peligroestructura_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_peligroestructura_3.addFeatures(features_peligroestructura_3);
var lyr_peligroestructura_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_peligroestructura_3, 
                style: style_peligroestructura_3,
                interactive: true,
                title: '<img src="styles/legend/peligroestructura_3.png" /> peligroestructura'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_car_1.setVisible(true);lyr_Calorporzonas_2.setVisible(true);lyr_peligroestructura_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_car_1,lyr_Calorporzonas_2,lyr_peligroestructura_3];
lyr_Calorporzonas_2.set('fieldAliases', {'id': 'id', 'Nº Asist': 'Nº Asist', 'NUMPOINTS': 'NUMPOINTS', 'cableroto': 'cableroto', 'emanaciongas': 'emanaciongas', 'otros': 'otros', 'peligroincendio': 'peligroincendio', 'peligroestructura': 'peligroestructura', 'posteporcaer': 'posteporcaer', 'todo': 'todo', });
lyr_peligroestructura_3.set('fieldAliases', {'Id': 'Id', 'Direccion': 'Direccion', 'Ubicacion': 'Ubicacion', 'pais': 'pais', 'provincia': 'provincia', 'Localidad': 'Localidad', 'TipoAlerta': 'TipoAlerta', 'Descripcio': 'Descripcio', 'Prioridad': 'Prioridad', 'FechaHoraI': 'FechaHoraI', 'UsuarioCre': 'UsuarioCre', 'EsPublico': 'EsPublico', 'EstadoPubl': 'EstadoPubl', 'Observacio': 'Observacio', 'Zona': 'Zona', 'EstadoEven': 'EstadoEven', 'MotivoCamb': 'MotivoCamb', 'Solicitant': 'Solicitant', 'Solicita_1': 'Solicita_1', 'Solicita_2': 'Solicita_2', 'Solicita_3': 'Solicita_3', 'Solicita_4': 'Solicita_4', 'Solicita_5': 'Solicita_5', 'Solicita_6': 'Solicita_6', 'Solicita_7': 'Solicita_7', 'Solicita_8': 'Solicita_8', 'Solicita_9': 'Solicita_9', 'Solicita10': 'Solicita10', 'Solicita11': 'Solicita11', 'NumeroRecl': 'NumeroRecl', 'NumeroPart': 'NumeroPart', 'UGC': 'UGC', 'Cuadernill': 'Cuadernill', 'Legajo': 'Legajo', 'PartidaMun': 'PartidaMun', 'Partida': 'Partida', 'Dominio': 'Dominio', 'Convenio': 'Convenio', 'Responsabl': 'Responsabl', 'NumeroRefe': 'NumeroRefe', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Calorporzonas_2.set('fieldImages', {'id': 'TextEdit', 'Nº Asist': 'TextEdit', 'NUMPOINTS': 'TextEdit', 'cableroto': 'TextEdit', 'emanaciongas': 'TextEdit', 'otros': 'TextEdit', 'peligroincendio': 'TextEdit', 'peligroestructura': 'TextEdit', 'posteporcaer': 'TextEdit', 'todo': 'TextEdit', });
lyr_peligroestructura_3.set('fieldImages', {'Id': '', 'Direccion': '', 'Ubicacion': '', 'pais': '', 'provincia': '', 'Localidad': '', 'TipoAlerta': '', 'Descripcio': '', 'Prioridad': '', 'FechaHoraI': '', 'UsuarioCre': '', 'EsPublico': '', 'EstadoPubl': '', 'Observacio': '', 'Zona': '', 'EstadoEven': '', 'MotivoCamb': '', 'Solicitant': '', 'Solicita_1': '', 'Solicita_2': '', 'Solicita_3': '', 'Solicita_4': '', 'Solicita_5': '', 'Solicita_6': '', 'Solicita_7': '', 'Solicita_8': '', 'Solicita_9': '', 'Solicita10': '', 'Solicita11': '', 'NumeroRecl': '', 'NumeroPart': '', 'UGC': '', 'Cuadernill': '', 'Legajo': '', 'PartidaMun': '', 'Partida': '', 'Dominio': '', 'Convenio': '', 'Responsabl': '', 'NumeroRefe': '', 'result_num': '', 'osm_id': '', 'display_na': '', 'category': '', 'type': '', 'latlong': '', });
lyr_Calorporzonas_2.set('fieldLabels', {'id': 'no label', 'Nº Asist': 'no label', 'NUMPOINTS': 'no label', 'cableroto': 'no label', 'emanaciongas': 'no label', 'otros': 'no label', 'peligroincendio': 'no label', 'peligroestructura': 'no label', 'posteporcaer': 'no label', 'todo': 'no label', });
lyr_peligroestructura_3.set('fieldLabels', {'Id': 'no label', 'Direccion': 'no label', 'Ubicacion': 'no label', 'pais': 'no label', 'provincia': 'no label', 'Localidad': 'no label', 'TipoAlerta': 'no label', 'Descripcio': 'no label', 'Prioridad': 'no label', 'FechaHoraI': 'no label', 'UsuarioCre': 'no label', 'EsPublico': 'no label', 'EstadoPubl': 'no label', 'Observacio': 'no label', 'Zona': 'no label', 'EstadoEven': 'no label', 'MotivoCamb': 'no label', 'Solicitant': 'no label', 'Solicita_1': 'no label', 'Solicita_2': 'no label', 'Solicita_3': 'no label', 'Solicita_4': 'no label', 'Solicita_5': 'no label', 'Solicita_6': 'no label', 'Solicita_7': 'no label', 'Solicita_8': 'no label', 'Solicita_9': 'no label', 'Solicita10': 'no label', 'Solicita11': 'no label', 'NumeroRecl': 'no label', 'NumeroPart': 'no label', 'UGC': 'no label', 'Cuadernill': 'no label', 'Legajo': 'no label', 'PartidaMun': 'no label', 'Partida': 'no label', 'Dominio': 'no label', 'Convenio': 'no label', 'Responsabl': 'no label', 'NumeroRefe': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_peligroestructura_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});