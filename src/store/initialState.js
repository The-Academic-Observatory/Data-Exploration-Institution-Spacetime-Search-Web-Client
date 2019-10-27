export default {
    auth: { isAuthorized: false },
    appLayout: {},  
    searchField: {
        value: '',
        //selectedGridId: null,
        //hoveredGridId: null,
        //gridIdIsPinned: false,
    },
    queryResults: {
        institutionYearSearchResult: null,
        doiSearchResult: null,
    },
    map: {
        //boundingRect: {},
        //tileMaxLevel: 0,
        //loadedGeoJsonDataSource: null,
        pickedGridId: null,
        selectedGridId: null,
        bounds: null,
        zoom: null,
    },
    timeline: {
	selectionStart: null,
        selectionEnd: null,
        yearFocus: null,
        type: "year",
        tbars: {}, // the values for each rect in timeline
    }
}
