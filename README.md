# MAGEODATA
*Géoportail des donnnées ouvertes du Maroc exposant, en accès libre et gratuit, les données publiées sur le Portail National de l'Open Data en utilisant une approche cartographique pour faciliter la visualisation et l’exploitation de ces données.*

Concevoir et partager des cartes sur internet sont des enjeux essentiels pour le secteur de la cartographie qui doit aujourd’hui faire face aux évolutions majeures des techniques de Web Mapping. 

Ainsi, ce travail explore cette nouvelle ère de la cartographie et présente la manière de créer et distribuer des cartes en utilisant des outils libres et gratuits de Cartographie Internet :

<ul>
  <li>Récupération des données ouvertes depuis le Portail National de l'Open Data du Maroc</li>
  <li>Nettoyage, préparation et transformation des données récupérées</li>
  <li>Chargement des données dans une base de données NoSQL</li>
  <li>Cartographie des données selon leurs thèmes</li>
</ul>

## Ressources
<table class="table">
            <tr>
              <th scope="col" colspan="3">Backend</th>
            </tr>
            <tr>
              <td rowspan="2">Serveur</td>
              <td>Node JS</td>
              <td>Plateforme de développement JavaScript intégrant un serveur HTTP</td>
            </tr>
            <tr>
              <td>Express JS</td>
              <td>Framework pour construire des applications web basées sur Node JS</td>
            </tr>
            <tr>
              <td rowspan="2">Base de données</td>
              <td>MongoDB</td>
              <td>Système de gestion de base de données orienté documents et ne nécessitant pas de schéma prédéfini des données (NoSQL Database)</td>
            </tr>
            <tr>
              <td>MongoDB Atlas</td>
              <td>Service de base de données multi-cloud</td>
            </tr>
            <tr>
              <th scope="col" colspan="3">Frontend</th>
            </tr>
            <tr>
              <td>Embedded JavaScript (EJS)</td>
              <td colspan="2">Bibliothèque JavaScript libre pour le traitement de modèles côté client utilisée pour appeler les pages HTML depuis Node JS</td> 
            </tr>
            <tr>
              <td>jQuery</td>
              <td colspan="2">Bibliothèque JavaScript libre et multiplateforme créée pour faciliter l'écriture de scripts côté client dans le code HTML des pages web</td> 
            </tr>
            <tr>
              <td>Bootstrap</td>
              <td colspan="2">Framework utile à la création du design (graphisme, animation et interactions avec la page dans le navigateur) de sites et d'applications web</td>
            </tr>
            <tr>
              <td>Font Awesome</td>
              <td colspan="2">Police d'écriture et outil d'icônes basée sur CSS et utilisée avec Bootstrap</td>
            </tr>
            <tr>
              <td>Leaflet JS</td>
              <td colspan="2">Bibliothèque JavaScript libre de cartographie en ligne utilisant le format GeoJSON pour les structures de données géospatiales</td>
            </tr>
            <tr>
              <td>Chart JS</td>
              <td colspan="2">Bibliothèque JavaScript libre pour la visualisation de données</td>
            </tr>
            <tr>
              <td>Three JS</td>
              <td colspan="2">Bibliothèque JavaScript libre pour créer des scènes 3D dans un navigateur web</td>
            </tr>
        </table>

## Développeurs
Projet de cartographie internet
Réalisé par des étudiants en troisième année de la filière de formation en Sciences Géomatiques et Ingénierie Topogaphique à l'Institut Agronomique et Vétérinaire Hassan II :
<ul>
  <li>Anass Yarroudh</li>
  <li>Hatim Mouhmil</li>
  <li>Khalid El Achabi</li>
</ul>

<table class="table">
          <thead>
            <tr>
              <th scope="col">Thèmes</th>
              <th scope="col">Données</th>
              <th scope="col">Fichiers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowspan="5">Éducation</th>
              <td>Enseignement Scolaire</td>
              <td><a href="data/education/scolaire.csv">scolaire.csv</a></td>
            </tr>
            <tr>
              <td rowspan="4">Enseignement Supérieur</th>
              <td><a href="data/education/juridique_administrative.csv">juridique_administrative.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/education/pedagogique.csv">pedagogique.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/education/scientifique_technique.csv">scientifique_technique.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/education/universites.csv">universite.csv</a></td>
            </tr>
            <tr>
              <th rowspan="15">Habitat</th>
              <td rowspan="5">Montants de loyers</td>
              <td><a href="data/habitat/loyers/loyers_villa_regions.csv">loyers_villa_regions.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/habitat/loyers/loyers_aps_regions.csv">loyers_aps_regions.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/habitat/loyers/loyers_ape_regions.csv">loyers_ape_regions.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/habitat/loyers/loyers_mle_regions.csv">loyers_mle_regions.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/habitat/loyers/loyers_moyens_regions.csv">loyers_moyens_regions.csv</a></td>
            </tr>
            <tr>
              <td rowspan="5">Montants de cautions</td>
              <td><a href="data/habitat/cautions/cautions_villa_regions.csv">cautions_villa_regions.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/habitat/cautions/cautions_aps_regions.csv">cautions_aps_regions.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/habitat/cautions/cautions_ape_regions.csv">cautions_ape_regions.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/habitat/cautions/cautions_mle_regions.csv">cautions_mle_regions.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/habitat/cautions/cautions_moyens_regions.csv">cautions_moyens_regions.csv</a></td>
            </tr>
            <tr>
              <td rowspan="5">Honoraires des agents immobiliers</td>
              <td><a href="data/habitat/honoraires/honoraires_villa_regions.csv">honoraires_villa_regions.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/habitat/honoraires/honoraires_aps_regions.csv">honoraires_aps_regions.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/habitat/honoraires/honoraires_ape_regions.csv">honoraires_ape_regions.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/habitat/honoraires/honoraires_mle_regions.csv">honoraires_mle_regions.csv</a></td>
            </tr>
            <tr>
              <td><a href="data/habitat/honoraires/honoraires_moyens_regions.csv">honoraires_moyens_regions.csv</a></td>
            </tr>
            <tr>
              <th rowspan="3">Démographie</th>
              <td>Population légale</td>
              <td><a href="data/demographie/population_legale.csv">population_legale.csv</a></td>
            </tr>
            <tr>
              <td>Population urbaine</td>
              <td><a href="data/demographie/population_urbaine.csv">population_urbaine.csv</a></td>
            </tr>
            <tr>
              <td>Population rurale</td>
              <td><a href="data/demographie/population_rurale.csv">population_rurale.csv</a></td>
            </tr>
          </tbody>
        </table>
