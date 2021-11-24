if (window.screen.width <= 560) {
	const particles = {
		"fpsLimit": 60,
		"particles": {
			"number": {
				"value": 50,
				"density": {
				  "enable": true,
				  "value_area": 800
				}
			  },
		},
		"interactivity": {
		"modes": {
			"grab": {
				"distance": 140,
				"line_linked": {
				"opacity": 0.5
				}
			},
			"bubble": {
				"distance": 0,
				"size": 10,
				"duration": 2,
				"opacity": 0.8,
				"speed": 1
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 3
			},
			"remove": {
				"particles_nb": 1
			}
			}
		},

   }} else {
	const particles = {
		"fpsLimit": 60,
		"particles": {
		  "number": {
			"value": 150,
			"density": {
			  "enable": true,
			  "value_area": 800
			}
		  },
		  "color": {
			"value": "#e30f5f",
		  //    "animation": {
		  //      "enable": true,
		  //      "speed": 0,
		  //      "sync": true
		  //   }
		  },
		  "shape": {
			"type": "circle",
			"stroke": {
			  "width": 0,
			  "color": "#e30f5f"
			},
			"polygon": {
			  "nb_sides": 5
			},
		  },
		  "opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
			  "enable": false,
			  "speed": 1,
			  "opacity_min": 0.1,
			  "sync": false
			}
		  },
		  "size": {
			"value": 3,
			"random": true,
			"anim": {
			  "enable": false,
			  "speed": 40,
			  "size_min": 0.1,
			  "sync": false
			}
		  },
		  "links": {
			"enable": true,
			"distance": 200,
			"color": "#ffffff",
			"opacity": 0.1,
			"width": 0.8
		  },
		  "move": {
			"enable": true,
			"speed": 2,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "bounce",
			"attract": {
			  "enable": false,
			  "rotateX": 600,
			  "rotateY": 1200
			}
		  }
		},
		"interactivity": {
		  "detect_on": "canvas",
		  "events": {
			"onhover": {
			  "enable": true,
			  "mode": "grab",
			  "color": "#ffffff"
			},
			"onclick": {
			  "enable": true,
			  "mode": "push",
			  "color": "#ffffff"
			},
			"resize": true
		  },
		  "modes": {
			"grab": {
			  "distance": 140,
			  "line_linked": {
				"opacity": 0.5
			  }
			},
			"bubble": {
			  "distance": 0,
			  "size": 10,
			  "duration": 2,
			  "opacity": 0.8,
			  "speed": 1
			},
			"repulse": {
			  "distance": 200,
			  "duration": 0.4
			},
			"push": {
			  "particles_nb": 3
			},
			"remove": {
			  "particles_nb": 1
			}
		  }
		},
		"retina_detect": true,
		"background": {
		  "image": "",
		  "position": "50% 50%",
		  "repeat": "no-repeat",
		  "size": "cover"
		}
	  },
	  
   };