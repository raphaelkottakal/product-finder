export default {
	main: {
		key: 'ANSWER Q1',
		text:'Please choose your gender, so we can show you relevant products',
		image: 'https://placehold.it/300x100&text=Choose your gender',
		options: [
			{
				key: 'Men',
				image: 'https://placehold.it/300x300&text=Men',
				optionText: 'MEN',
				nextQuestionKey: 'one'
			},
			{
				key: 'Women',
				image: 'https://placehold.it/300x300&text=Women',
				optionText: 'WOMEN',
				nextQuestionKey: 'two'
			}
		]
	},
	one: {
		key: 'ANSWER Q2',
		text:'Choose your Sport or Activity from the list below. Any activity that you do 2-3 times a week would require specialized sports shoes!',
		image: 'https://placehold.it/300x100&text=Choose your Sport or Activity',
		options: [
			{
				key: 'Running',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/1.1.png',
				optionText: 'Running',
				nextQuestionKey: 'oneA'
			},
			{
				key: 'Training',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/2.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/2.png',
				optionText: 'Training',
				nextQuestionKey: 'oneB'
			},
			{
				key: 'Football',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/6.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/6.png',
				optionText: 'Football',
				nextQuestionKey: 'oneC'
			},
			{
				key: 'Basketball',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/3.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/3.png',
				optionText: 'Basketball',
				nextQuestionKey: 'oneD'
			},
			{
				key: 'Tennis',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/4.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/4.png',
				optionText: 'Tennis',
				nextQuestionKey: 'oneE'
			},
			{
				key: 'Cricket',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/5.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/5.png',
				optionText: 'Cricket',
				nextQuestionKey: 'oneF'
			},
			{
				key: 'Trekking/Outdoor',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/7.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/7.png',
				optionText: 'Outdoor',
				nextQuestionKey: 'oneG'
			},
			{
				key: 'Indoor Sports',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/8.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/8.png',
				optionText: 'Indoor',
			},
		]
	},
	two: {
		key: 'ANSWER Q2',
		text:'Choose your Sport or Activity from the list below. Any activity that you do 2-3 times a week would require specialized sports shoes!',
		image: 'https://placehold.it/300x100&text=Choose your Sport or Activity',
		options: [
			{
				key: 'Running / Walking',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/1.1.png',
				optionText: 'Running or Walking',
				nextQuestionKey: 'twoA'
			},
			{
				key: 'Training/Gym/ Aerobics/Dance',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480339895/SIS/shoe-finder/icon-shoefinder-04.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480339895/SIS/shoe-finder/icon-shoefinder-03.png',
				optionText: 'Training',
				nextQuestionKey: 'twoB'
			},
			{
				key: 'Team Sports',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480339895/SIS/shoe-finder/icon-shoefinder-02.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480339895/SIS/shoe-finder/icon-shoefinder-0.png',
				optionText: 'Team Sports',
				// nextQuestionKey: 'twoC'
			},
			{
				key: 'Trekking/Outdoor',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/7.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480332709/SIS/shoe-finder/7.png',
				optionText: 'Outdoor',
				nextQuestionKey: 'twoD'
			},
		]
	},
	oneA: {
		key: 'ANSWER Q3',
		text:'What surface do you run on?',
		image: 'https://placehold.it/300x100&text=What surface do you run on?',
		options: [
			{
				key: 'Road/Treadmill',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335009/SIS/shoe-finder/23.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335009/SIS/shoe-finder/23.png',
				optionText: 'Road/Treadmill',
				nextQuestionKey: 'pronation'
			},
			{
				key: 'Trail',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335009/SIS/shoe-finder/27.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335009/SIS/shoe-finder/27.png',
				optionText: 'Trail',
				nextQuestionKey: 'pronation'
			},
			{
				key: 'Track',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335009/SIS/shoe-finder/17.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335009/SIS/shoe-finder/17.png',
				optionText: 'Track',
				nextQuestionKey: 'pronation'
			},
			{
				key: 'Skip',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338411/SIS/shoe-finder/skip.png',
				nextQuestionKey: 'pronation'
			},
		]
	},
	oneB: {
		key: 'ANSWER Q3',
		text:'What is your workout regime?',
		image: 'https://placehold.it/300x100&text=What is your workout regime?',
		options: [
			{
				key: 'Weight Training',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335374/SIS/shoe-finder/18.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335374/SIS/shoe-finder/18.png',
				optionText: 'Weight Training',
			},
			{
				key: 'Cardio or Group Fitness',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335374/SIS/shoe-finder/33.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335374/SIS/shoe-finder/33.png',
				optionText: 'Cardio Fitness',
			},
			{
				key: 'Skip',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338411/SIS/shoe-finder/skip.png',
			},
		]
	},
	oneC: {
		key: 'ANSWER Q3',
		text:'What surface do you play on?',
		image: 'https://placehold.it/300x100&text=What surface do you play on?',
		options: [
			{
				key: 'Grass Ground',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480333373/SIS/shoe-finder/19.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480333373/SIS/shoe-finder/19.1.png',
				optionText: 'Grass Ground',
			},
			{
				key: 'Hard/Indoor Ground',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480333373/SIS/shoe-finder/28.2.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480333373/SIS/shoe-finder/28.1.png',
				optionText: 'Hard Ground',
			},
			{
				key: 'Soft Ground (Clay)',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480333373/SIS/shoe-finder/16.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480333373/SIS/shoe-finder/16.1.png',
				optionText: 'Soft Ground',
			},
			{
				key: 'Skip',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338411/SIS/shoe-finder/skip.png',
			},
		]
	},
	oneD: {
		key: 'ANSWER Q3',
		text:'What position do you play at?',
		image: 'https://placehold.it/300x100&text=What position do you play at?',
		options: [
			{
				key: 'Point Guard',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335479/SIS/shoe-finder/11.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335479/SIS/shoe-finder/11.png',
				optionText: 'Point Guard',
			},
			{
				key: 'Shooting Guard',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335479/SIS/shoe-finder/12.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335479/SIS/shoe-finder/12.png',
				optionText: 'Shooting Guard',
			},
			{
				key: 'Center',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335479/SIS/shoe-finder/9.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335479/SIS/shoe-finder/9.1.png',
				optionText: 'Center',
			},
			{
				key: 'Power Forward',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335479/SIS/shoe-finder/10.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335479/SIS/shoe-finder/10.png',
				optionText: 'Power Forward',
			},
			{
				key: 'Small Forward',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335479/SIS/shoe-finder/13.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335479/SIS/shoe-finder/13.png',
				optionText: 'Small Forward',
			},
			{
				key: 'Skip',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338411/SIS/shoe-finder/skip.png',
			},
		]
	},
	oneE: {
		key: 'ANSWER Q3',
		text:'What surface do you play on?',
		image: 'https://placehold.it/300x100&text=What surface do you play on?',
		options: [
			{
				key: 'Grass court',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480333373/SIS/shoe-finder/19.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480333373/SIS/shoe-finder/19.1.png',
				optionText: 'Grass court',
			},
			{
				key: 'Clay court',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480333373/SIS/shoe-finder/16.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480333373/SIS/shoe-finder/16.1.png',
				optionText: 'Clay court',
			},
			{
				key: 'Indoor/Hard Court',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480333373/SIS/shoe-finder/28.2.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480333373/SIS/shoe-finder/28.1.png',
				optionText: 'Hard Court',
			},
			{
				key: 'Skip',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338411/SIS/shoe-finder/skip.png',
			},
		]
	},
	oneF: {
		key: 'ANSWER Q3',
		text:'What position do you play at?',
		image: 'https://placehold.it/300x100&text=What position do you play at?',
		options: [
			{
				key: 'Bowlers',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335844/SIS/shoe-finder/22.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335844/SIS/shoe-finder/22.png',
				optionText: 'Bowlers',
			},
			{
				key: 'Batsmen',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335844/SIS/shoe-finder/25.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335844/SIS/shoe-finder/25.png',
				optionText: 'Batsmen',
			},
			{
				key: 'All Rounders',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335844/SIS/shoe-finder/32.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335844/SIS/shoe-finder/32.1.png',
				optionText: 'All Rounders',
			},
			{
				key: 'Skip',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338411/SIS/shoe-finder/skip.png',
			},
		]
	},
	oneG: {
		key: 'ANSWER Q3',
		text:'What is your outdoor activity?',
		image: 'https://placehold.it/300x100&text=What is your outdoor activity?',
		options: [
			{
				key: 'Trail Running',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480336051/SIS/shoe-finder/21.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480336051/SIS/shoe-finder/21.1.png',
				optionText: 'Trail Running',
				nextQuestionKey: 'pronation'
			},
			{
				key: 'Hiking/Trekking',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480336051/SIS/shoe-finder/26.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480336051/SIS/shoe-finder/26.1.png',
				optionText: 'Trekking',
				nextQuestionKey: 'tops'
			},
			{
				key: 'Skip',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338411/SIS/shoe-finder/skip.png',
			},
		]
	},
	twoA: {
		key: 'ANSWER Q3',
		text: 'What surface do you run/walk on?',
		image: 'https://placehold.it/300x100&text=What surface do you run or walk on?',
		options: [
			{
				key: 'Road/Treadmill',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335009/SIS/shoe-finder/23.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335009/SIS/shoe-finder/23.png',
				optionText:'Road/Treadmill',
				nextQuestionKey: 'pronation'
			},
			{
				key: 'Trail',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335009/SIS/shoe-finder/27.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335009/SIS/shoe-finder/27.png',
				optionText: 'Trail',
				nextQuestionKey: 'pronation'
			},
			{
				key: 'Track',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335009/SIS/shoe-finder/17.1.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480335009/SIS/shoe-finder/17.png',
				optionText: 'Track',
				nextQuestionKey: 'pronation'
			},
			{
				key: 'Skip',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338411/SIS/shoe-finder/skip.png',
				nextQuestionKey: 'pronation'
			},
		]
	},
	twoB: {
		key: 'ANSWER Q3',
		text: 'What is your training activity?',
		image: 'https://placehold.it/300x100&text=What is your training activity?',
		options: [
			{
				key: 'Training / Gym',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338023/SIS/shoe-finder/20.2.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338023/SIS/shoe-finder/20.1.png',
				optionText: 'Weight Training',
			},
			{
				key: 'Aerobics/Dance/Zumba/ Group Cardio classes',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338023/SIS/shoe-finder/29.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338023/SIS/shoe-finder/29.1.png',
				optionText: 'Cardio Fitness',
			},
			{
				key: 'Skip',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338411/SIS/shoe-finder/skip.png',
			},
		]
	},
	twoD: {
		key: 'ANSWER Q3',
		text: 'What is your outdoor activity?',
		image: 'https://placehold.it/300x100&text=What is your outdoor activity?',
		options: [
			{
				key: 'Trail Running',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480336051/SIS/shoe-finder/21.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480336051/SIS/shoe-finder/21.1.png',
				optionText: 'Trail Running',
				nextQuestionKey: 'pronation'
			},
			{
				key: 'Hiking/Trekking',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480336051/SIS/shoe-finder/26.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480336051/SIS/shoe-finder/26.1.png',
				optionText: 'Trekking',
			},
			{
				key: 'Skip',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338411/SIS/shoe-finder/skip.png',
			},
		]
	},
	pronation: {
		key: 'ANSWER Q4',
		text: 'What is your foot structure and running style?',
		image: 'https://placehold.it/300x100&text=What is your foot structure and running style?',
		options: [
			{
				key: 'High arch/Underpronation',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480336976/SIS/shoe-finder/14.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480336976/SIS/shoe-finder/14.1.png',
				optionText: 'High arch or Underpronation',
			},
			{
				key: 'Normal arch/Neutral pronation',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480336976/SIS/shoe-finder/31.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480336976/SIS/shoe-finder/31.1.png',
				optionText: 'Normal arch or Neutral pronation',
			},
			{
				key: 'Low arch/Overpronation',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480336976/SIS/shoe-finder/15.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480336976/SIS/shoe-finder/15.1.png',
				optionText: 'Low/flat arches or Overpronation',
			},
			{
				key: 'Skip',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338411/SIS/shoe-finder/skip.png',
			},
		]
	},
	tops: {
		key: 'ANSWER Q4',
		text: 'Mid tops or high tops?',
		image: 'https://placehold.it/300x100&text=Mid tops or high tops?',
		options: [
			{
				key: 'Mid Tops',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480337222/SIS/shoe-finder/24.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480337222/SIS/shoe-finder/24.1.png',
				optionText: 'Mid Tops',
			},
			{
				key: 'High Tops',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480337222/SIS/shoe-finder/30.png',
				select: 'http://res.cloudinary.com/myntra-com/image/upload/v1480337222/SIS/shoe-finder/30.1.png',
				optionText: 'High Tops',
			},
			{
				key: 'Skip',
				image: 'http://res.cloudinary.com/myntra-com/image/upload/v1480338411/SIS/shoe-finder/skip.png',
			},
		]
	},
};