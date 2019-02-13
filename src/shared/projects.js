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
			'Built an Android app using native android. Game consist on players walking around UCF campus and picking up knights in order to create an Army. once a Knight is clicked on the map, the camera will open up, and players have to find the knight on the screen (Pretty similar to Pokemon go, using Augmented Reality) Once the army is created they can go ahead and battle other players Via Bluetooth.',
		image: KnightImage,
		sourceCode: 'https://github.com/jorgebaralt/KnightGo',
		youtubeLink: 'https://www.youtube.com/watch?v=hgcbrHKcQlI&t=1s',
	},
	{
		name: 'Off Court',
		description:
			'App built using Ember.js, Android, and Ruby on Rails. Players can create an account and start answering questions on a daily basis about 4 different sections(Physical, Mental, Spiritual, Training). Then Coaches can go on the website and review this answers. Implemented Chat using Twilio and real time notification with Firebase',
		image: OffCourtImage,
		sourceCode: 'https://github.com/jorgebaralt/Athlete-Mindfulness-App',
	},
	{
		name: 'Tire Outlet Website',
		description:
			'Built the website of the Auto repair shop Tire Outlet Truck bus and car, Built using React and Redux',
		image: TireOutletImage,
		sourceCode: 'https://github.com/jorgebaralt/tire-outlet',
		website: 'https://www.tireoutletautorepair.com',
	},
];

export default projects;
