var max = function(entries)
{
    return entries
        .reduce(function(previous, current)
        {
            return current.localeCompare(previous) <= 0 ? current : previous;
        }, entries[0]);
};

//console.log(max(['arun', 'suren', 'master', 'aali']));

var get = function()
{
    $.ajax({
        method: "GET",
        url: "https://qa1.climate.com/nitro/api/data/v1/field_groups?user=23&primary_fields=true&grower_apps=true"
    });
};

var put = function()
{
    var data = {
        agx_seed_hybrid: null,
        crop: "corn",
        field_id: 243034,
        id: 389876,
        planted_area: "37.92",
        planted_area_units: "acres",
        planting_date: "2015-05-01T05:00:00.000Z",
        population: null,
        rm: 103
    };

    $.ajax({
        method: "PUT",
        url: "https://qa1.climate.com/nitro/api/data/v1/planting_activities/389876?grower_apps=true",
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    });
};

var data = {
    agx_seed_hybrid: null,
    crop: "corn",
    field_id: 243032,
    id: 389874,
    planted_area: "37.92",
    planted_area_units: "acres",
    planting_date: "2015-05-01T05:00:00.000Z",
    population: null,
    rm: 100
};
console.log(JSON.parse(JSON.stringify(data)));

