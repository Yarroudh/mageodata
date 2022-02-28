// Requirements
const express = require('express'); 
const app = express()
require('dotenv').config();

const port = process.env.PORT || 80

function addslashes (str) {
    return (str + '')
      .replace(/[\\']/g, '\\$&')
}

// MongoDB Connection
var MongoClient = require('mongodb').MongoClient;
var url = env.DB_URI;

// Universities GeoJSON
var univ = String();

MongoClient.connect(url, function(err, db) {
    var dbo = db.db("education");
    dbo.collection("universite").find({}).toArray(function(err, result) {
        if (err) throw err;
        univ = `{"type": "FeatureCollection","name": "universites","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features":${JSON.stringify(result)}}`;
        univ = addslashes(univ);
        db.close();
    });
});

// Pedagogique GeoJSON
var pedag = String()

MongoClient.connect(url, function(err, db) {
    var dbo = db.db("education");
    dbo.collection("pedagogique").find({}).toArray(function(err, result) {
        if (err) throw err;
        pedag = `{"type": "FeatureCollection","name": "pedagogique","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features":${JSON.stringify(result)}}`;
        pedag = addslashes(pedag);
        db.close();
    });
});

// Juridque-administrative GeoJSON
var tech = String()

MongoClient.connect(url, function(err, db) {
    var dbo = db.db("education");
    dbo.collection("scientifique_technique").find({}).toArray(function(err, result) {
        if (err) throw err;
        tech = `{"type": "FeatureCollection","name": "scientifique_technique","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features":${JSON.stringify(result)}}`;
        tech = addslashes(tech);
        db.close();
    });
});

// Juridque-administrative GeoJSON
var jurid = String()

MongoClient.connect(url, function(err, db) {
    var dbo = db.db("education");
    dbo.collection("juridique_administrative").find({}).toArray(function(err, result) {
        if (err) throw err;
        jurid = `{"type": "FeatureCollection","name": "juridique_administrative","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features":${JSON.stringify(result)}}`;
        jurid = addslashes(jurid);
        db.close();
    });
});

// Education scolaire GeoJSON
var educ = String()
var regions = String()

MongoClient.connect(url, function(err, db) {
    var dbo = db.db("decoupage");
    dbo.collection("regions").find({}).toArray(function(err, result) {
        if (err) throw err;
        regions = `{"type": "FeatureCollection","name": "regions","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features":${JSON.stringify(result)}}`;
        regions = addslashes(regions);
        db.close();
    });
});

MongoClient.connect(url, function(err, db) {
    var dbo = db.db("decoupage");
    dbo.collection('centroid').aggregate([
        {
            $lookup:
            {
                from: 'education',
                localField: 'properties.Nom_Region',
                foreignField: 'region',
                as: 'education'
            }
        },
        {
            $project:
            {
                "education._id":0,
                "_id":0,
                "education.region":0
            }
        }
    ]).toArray(function(err, result) {
        if (err) throw err;
        educ = `{"type": "FeatureCollection","name": "education","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features":${JSON.stringify(result)}}`;
        educ = addslashes(educ);
        db.close();
    });
});

// Habitat GeoJSON
var habitat = String();

MongoClient.connect(url, function(err, db){
    var dbo = db.db("decoupage");
    dbo.collection("regions").aggregate([
        {
            $lookup:
            {
                from: 'loyers',
                localField: 'properties.Nom_Region',
                foreignField: 'region',
                as: 'loyers'
            }
        },
        {
            $lookup:
            {
                from: 'cautions',
                localField: 'properties.Nom_Region',
                foreignField: 'region',
                as: 'cautions'
            }
        },
        {
            $lookup:
            {
                from: 'honoraires',
                localField: 'properties.Nom_Region',
                foreignField: 'region',
                as: 'honoraires'
            }
        },
        {
            $project:
            {
                "loyers._id":0,
                "_id":0,
                "loyers.region":0,
                "cautions._id":0,
                "_id":0,
                "cautions.region":0,
                "honoraires._id":0,
                "_id":0,
                "honoraires.region":0
            }
        }
    ]).toArray(function(err, result) {
        if (err) throw err;
        habitat = `{"type": "FeatureCollection","name": "regions","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features":${JSON.stringify(result)}}`;
        habitat = addslashes(habitat);
        db.close();
    });
})

// Demographie GeoJSON
var demo = String();

MongoClient.connect(url, function(err, db) {
    var dbo = db.db("decoupage");
    dbo.collection('centroid').aggregate([
        {
            $lookup:
            {
                from: 'population_legale',
                localField: 'properties.Nom_Region',
                foreignField: 'region',
                as: 'population_legale'
            }
        },
        {
            $lookup:
            {
                from: 'population_urbaine',
                localField: 'properties.Nom_Region',
                foreignField: 'region',
                as: 'population_urbaine'
            }
        },
        {
            $lookup:
            {
                from: 'population_rurale',
                localField: 'properties.Nom_Region',
                foreignField: 'region',
                as: 'population_rurale'
            }
        },
        {
            $project:
            {
                "population_legale._id":0,
                "_id":0,
                "population_legale.region":0,
                "population_urbaine._id":0,
                "_id":0,
                "population_urbaine.region":0,
                "population_rurale._id":0,
                "_id":0,
                "population_rurale.region":0,
                "properties.Population":0,
                "properties.Menages":0,
                "properties.Etrangers":0,
                "properties.Marocains":0
            }
        }
    ]).toArray(function(err, result) {
        if (err) throw err;
        demo = `{"type": "FeatureCollection","name": "demographie","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features":${JSON.stringify(result)}}`;
        demo = addslashes(demo);
        db.close();
    });
});

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname+"public/css"))
app.use('/img', express.static(__dirname+"public/img"))
app.use('/js', express.static(__dirname+"public/js"))
app.use('/tmp', express.static(__dirname+"public/tmp"))
app.use('/vendor', express.static(__dirname+"public/vendor"))
app.use('/videos', express.static(__dirname+"public/videos"))

// Views
app.set('views', './views')
app.set('view engine', 'ejs')

// Navigation
app.get('', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/index', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
})

app.get('/contact', (req, res) => {
    res.sendFile(`${__dirname}/views/contact.html`)
})

// app.get('/contact', (req, res) => {
//     res.render('contact')
// })

// app.get('/contact', (req, res) => {
//     var name = req.body.name;
//     var subject = req.body.subject;
//     var email = req.body.email;
//     var message = req.body.message;

//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("contact");
//         var visitor = { name: name, email: email, subject: subject, message: message };
//         dbo.collection("visitors").insertOne(visitor, function(err, res) {
//             if (err) throw err;
//             req.flash('success', 'Data added successfully!');
//             res.redirect('/contact');
//             db.close();
//         })
//     })
// })

app.get('/resource', (req, res) => {
    res.sendFile(`${__dirname}/views/resource.html`)
})

app.get('/topographie', (req, res) => {
    res.sendFile(`${__dirname}/views/topographie.html`)
})

app.get('/superieur', (req, res) => {
    res.render('superieur', { 
        univ: univ,
        pedag: pedag,
        jurid: jurid,
        tech: tech
    })
})

app.get('/scolaire', (req, res) => {
    res.render('scolaire', { 
        data: educ,
        regions: regions
    })
})

app.get('/demographie', (req, res) => {
    res.render('demographie', { 
        data: demo,
        regions: regions
    })
})

app.get('/habitat', (req, res) => {
    res.render('habitat', { 
        data: habitat
    })
})

// Listen on Port
app.listen(port, () => console.info(`App listening on port ${port}`))
