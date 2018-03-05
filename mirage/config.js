export default function() {
  this.namespace = '/api';

    let projects = [{
        type: 'projects',
        id: '1',
        attributes: {
          title: 'SEC',
          image: 'assets/images/sec-online.jpg',
          summary: 'Redesign including custom CMS and user documents portal',
          description: 'Custom Laravel based CMS, styled using Bootstrap and Sass - Node, Gulp and Git.',
          skills: 'CSS SASS jQuery Javascript Laravel PHP Vue  Bootstrap Git Gulp Node',
          link: 'https://www.sec-online.co.uk'
        }
      }, {
        type: 'projects',
        id: '2',
        attributes: {
          title: 'Big Reach',
          image: 'assets/images/big-reach.jpg',
          summary: 'Redesign and animation',
          description: 'Restyle and adding animation for an engaging digital marketing agency website',
          skills: 'CSS jQuery Javascript PHP Bootstrap CSS Keyframes SVG animation',
          link: 'https://www.bigreach.co.uk'
        }
      }, {
        type: 'projects',
        id: '3',
        attributes: {
          title: 'Aunty Matchmaker',
          image: 'assets/images/aunty-matchmaker.jpg',
          summary: 'Design and build of dating website',
          description: 'Laravel/Vue.js CMS & user management system, styled with Bootstrap and Sass - Node, Webpack and Git.',
          skills: 'CSS SASS jQuery Javascript Laravel PHP Vue Bootstrap Git Webpack Node',
          link: 'http://www.auntymatchmaker.com'
        }
      }, {
        type: 'projects',
        id: '4',
        attributes: {
          title: 'Fortem',
          image: 'assets/images/fortem.jpg',
          summary: 'Design and build of Fortem website (formerly Willmott Dixon)',
          description: 'Static site styled with Bootstrap and Sass - Node, Gulp and Git.',
          skills: 'CSS SASS jQuery Javascript Bootstrap Git Gulp Node',
          link: 'http://www.fortem.co.uk'
        }
      }, {
        type: 'projects',
        id: '5',
        attributes: {
          title: 'Fluid Restaurant Manager',
          image: 'assets/images/restaurant-manager.jpg',
          summary: 'Content managed template site for the restaurant trade',
          description: 'Laravel CMS, styled with Bootstrap and Sass - Gulp.',
          skills: 'CSS SASS jQuery Javascript Bootstrap Gulp',
          link: 'http://www.thetilbury.co.uk/'
        }
      }, {
        type: 'projects',
        id: '6',
        attributes: {
          title: 'Secomak',
          image: 'assets/images/secomak.jpg',
          summary: 'New website for Secomak',
          description: 'PHP and Vue.js CMS, styled with Bootstrap - inc Vue.js based "gas booster selector.',
          skills: 'CSS jQuery Javascript Bootstrap PHP Vue',
          link: 'http://www.secomak.com'
        }
      }, {
        type: 'projects',
        id: '7',
        attributes: {
          title: 'iSupply recruitment',
          image: 'assets/images/isupply-recruitment.jpg',
          summary: 'Job board and interactive map using geolocate API',
          description: 'PHP job board and distance calculations, Javascript map markers.',
          skills: 'CSS jQuery Javascript Bootstrap PHP API geolocate',
          link: 'http://www.isupplyrecruitment.com'
        }
      }, {
        type: 'projects',
        id: '8',
        attributes: {
          title: 'Fluid Studios',
          image: 'assets/images/fluidstudios.jpg',
          summary: 'Portfolio for Fluid Studios Ltd',
          description: 'PHP portfolio site with JSON portfolio data',
          skills: 'CSS jQuery Javascript Bootstrap PHP JSON',
          link: 'http://www.fluidstudiosltd.com'
        }
      }
    ];

  this.get('/projects', function(db, request) {
      if(request.queryParams.skills !== undefined) {
        let filteredProjects = projects.filter(function(i) {
          return i.attributes.skills.toLowerCase().indexOf(request.queryParams.skills.toLowerCase()) !== -1;
        });
        return { data: filteredProjects };
      } else {
        return { data: projects };
      }
    });
}

