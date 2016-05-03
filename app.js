
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
var simple = require('simple-blog');

// ALL PARAMETERS ARE OPTIONAL
simple.setup({
  name: 'Practical & pedagogical reflections on Olin.js', // Blog Title

  // How to generate slugs (defaults to "title")
  slugType: 'title', // options: "title" | "base36"

  // Path to the root of your app
  rootDir: __dirname,

  // Specify a URL that will dump all data
  //   Leave out or set to FALSE to disable
  dumpPath: false,

  // Set amount of posts per page (defaults to 3)
  pageSize: 5,

  // Path to Express.js directories
  publicPath: '/public',
  viewPath: '/views',

  // Redirect www.domain... to domain...
  redirectWWW: true,

  /*************************************************
   * The rest is used for the RSS feed
   */

  // Disable RSS
  // rss: false,

  // Enable RSS at /rss.xml (defaults to disabled)
  rss: {
    description: 'Pedagogical musings related to Olin.js, a student-taught web development course at Olin College of Engineering',
    author: 'Sarah Walters',
    img: '/favicon.ico', // Feed image
    limit: 10 // Feed item cutoff
  }
});

// Add custom routes the same as you would with Express.js
simple.app.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

// Add event listeners. Options are 'comment', 'start'

simple.events.on('comment', function(comment) {
  console.log('COMMENT', comment)
});

simple.events.on('start', function(config) {
  console.log('START', config);
});


// Start Simple Blog
simple.start();
