import KnightImage from '../assets/knightgo.jpeg';
import ServifyImage from '../assets/servify.jpeg';
import OffCourtImage from '../assets/offcoart.jpeg';
import TireOutletImage from '../assets/tireoutlet.jpeg';

const projects = [
	{
		name: 'Servify App',
		description:
			'Mobile app built with react native, Web app built using react js, backend using node.js and firebase',
		image: ServifyImage,
		ios:
			'https://itunes.apple.com/us/app/servify-find-local-services/id1439203889?mt=8',
		android:
			'https://play.google.com/store/apps/details?id=com.jorgebaralt.servify',
		website: 'https://www.servifyapp.com/',
	},
	{
		name: 'Knight Go',
		description:
			'Built an Android app using native android. Pick up knights using AR, fight over bluetooth',
		image: KnightImage,
		github: 'https://github.com/jorgebaralt/KnightGo',
		youtube: 'https://www.youtube.com/watch?v=hgcbrHKcQlI&t=1s',
	},
	{
		name: 'Off Court',
		description:
			'App built using Ember.js, Android, Ruby on Rails, Firebase notifications, Twilio for chat',
		image: OffCourtImage,
		github: 'https://github.com/jorgebaralt/Athlete-Mindfulness-App',
	},
	{
		name: 'Tire Outlet Website',
		description:
			'Built the website of the Auto repair shop Tire Outlet Truck bus and car, Built using React and Redux',
		image: TireOutletImage,
		github: 'https://github.com/jorgebaralt/tire-outlet',
		website: 'https://www.tireoutletautorepair.com',
	},
];

export default projects;
