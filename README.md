# React Native Development Training Workshop

**By the end of this workshop, students should be able to:**

- Understand a high level overview of React Native
- Build using stateless functional components
- Utilize React Native dev tools
- Apply unit testing using Enzyme
- Persist data using AsyncStorage
- Build Animation with LayoutAnimation

**You will need the following installed**

- XCode
- Android Studios
- NodeJS v8
- npm v5+
- react-native-cli
- react-devtools

## React Native Overview

Simply put.. You can build native mobile applications using only JavaScript and React.

**Real mobile app**

It is a real mobile app that is indistinguisable from an app built using Obj-C or Java.

React Native uses the same fundamental UI building blocks as regular iOS and Android apps

**No wasted time recompiling**

React Native allows you to build your app faster by using Hot Reloading. You can run new code while retain application state

**Compatible with native code**

React Native allows you to build using components written in Obj-C / Java / Swift.

**Build for Android & iOS with one code base**

You will no longer need to waste time building UI for both Android and iOS separately. You will be able to handle business logic in one single code-base.

**Fortune 500 Companies are using React Native in production**

Companies like Walmart, Pinterest, Tesla, Uber (to name a few) are currently using React Native in production. 

**[Source](https://facebook.github.io/react-native/) from Facebook**


## Building an Instagram Clone

### Setting up computer

If you haven't yet set up your computer yet, please install these dependencies:

```
$ brew install node
$ brew install watchman
$ npm install -g react-native-cli
```

### Create new application

```
$ react-native init InstaClone
$ cd InstaClone
$ react-native run-ios
```
You now have a native application ready to go!

### Setting up application..

We will download the dependencies for this application

```
npm i -SD react-test-renderer enzyme enzyme-adapter-react-16
npm i -S react-dom
```

### Writing our first component

We will now create a header

```
$ mkdir -p components/header __tests__ __mocks__
$ touch components/Header.js __tests__/components/Header.js
```

We want to start with testing. We will write tests for what we expect the component to be

In  `__tests__/components/Header.js`

```
'use strict';

import 'react-native';
import React from 'react';
import Header, {
	styles,
} from '../../components/Header';

import renderer from 'react-test-renderer';
import {
	shallow,
} from 'enzyme';

const createTestProps = () => ({
	name: 'InstaClone',
	type: 'default',
});

describe('<Header />', () => {
	let wrapper;

	describe('rendering', () => {
		// run before each test
		beforeEach(() => {
			wrapper = shallow(<Header {...createTestProps()} />);
		});

		it('renders correctly', () => {
			const tree = renderer.create(<Header />).toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('renders InstaClone in the name', () => {
			expect(wrapper.find('Text').contains('InstaClone')).toBe(true);
		});

		describe('styling', () => {
			it('should have the title style', () => {
				expect(wrapper.find('Text').prop('style')).toBe(styles['title']);
			});
		});
	});

});
```

Run the tests and see it fail!

Now we will create our component in `components/Header.js`:

```
'use strict';

import React, {
  Component,
} from 'react';
import {
	View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export const styles = StyleSheet.create({
  default: {
		// Dimensions
		height: 80,
		width: '100%',

		// Border bottom colors
		borderBottomWidth: 0.2,
		borderBottomColor: 'grey',

		// padding
		paddingBottom: 5,

		// align items
		justifyContent: 'flex-end',
	},
	title: {
		alignSelf: 'center',
		fontFamily: 'BradleyHandITCTT-Bold',
		fontSize: 35,
	},
});

const Header = ({
  name,
  type,
}) => (
  <View style={styles[type]}>
    <Text style={styles['title']}>{name}</Text>
  </View>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Header.defaultProps = {
  name: 'InstaClone',
  type: 'default',
};

Header.displayName = 'Header';

export default Header;
```

### Exercise: Create a footer

Take 15 minutes to try and create a footer. 

Write the tests:

```
'use strict';

import 'react-native';
import React from 'react';
import Footer, {
	styles,
} from '../../components/Footer';

import renderer from 'react-test-renderer';
import {
	shallow,
} from 'enzyme';

const createTestProps = () => ({
	label: 'Built in Los Angeles',
	type: 'default',
});

describe('<Footer />', () => {
	let wrapper;

	describe('rendering', () => {
		// run before each test
		beforeEach(() => {
			wrapper = shallow(<Footer {...createTestProps()} />);
		});

		it('renders correctly', () => {
			const tree = renderer.create(<Footer />).toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('renders Built in Los Angeles in the name', () => {
			expect(wrapper.find('Text').contains('Built in Los Angeles')).toBe(true);
		});

		describe('styling', () => {
			it('should have the title style', () => {
				expect(wrapper.find('Text').prop('style')).toBe(styles['label']);
			});
		});
	});

});
```

Write the Footer:

```
'use strict';

import React, {
	Component,
} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export const styles = StyleSheet.create({
	default: {
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
		borderTopWidth: 0.2,
		borderTopColor: 'grey',
	},
	label: {
		fontSize: 20,
		fontFamily: 'Avenir',
	},
});

const Footer = ({
	label,
	type,
}) => (
	<View style={styles[type]}>
		<Text style={styles['label']}>{label}</Text>
	</View>
);

Footer.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

Footer.defaultProps ={
	label: 'Built in Los Angeles',
	type: 'default',
};

Footer.displayName = 'Footer';

export default Footer;
```

### Adding Images

Let's create a JSON directory in `InstaClone`:

```
$ mkdir json
$ touch json/pictures.json
```

Add our snippet into your `pictures.json` file

### Handling Lists

Create the components to handle the Photos:

```
$ touch components/PhotoList.js __tests__/components/PhotoList.js
$ touch components/Photo.js __tests__/components/Photo.js
```

Define tests in test for `PhotoList.js`:

```
'use strict';

import React from 'react';
import {
	shallow,
} from 'enzyme';
import renderer from 'react-test-renderer';
import {
	FlatList,
} from 'react-native';
import PhotoList from '../../components/PhotoList';
import pictures from '../../json/pictures.json';

const createTestProps = () => ({
	photos: pictures,
});

describe('<PhotoList />', () => {
	const wrapper = shallow(
		<PhotoList {...createTestProps()} />
	);

	describe('rendering', () => {
		it('renders correctly', () => {
			const tree = renderer.create(<PhotoList {...createTestProps()} />).toJSON();
		});

		it('should render the same number of photos as the JSON provides', () => {
			expect(wrapper.find(FlatList).props().data.length).toEqual(pictures.length);
		});
	});

	describe('interactions', () => {
		it('gets photos', () => {
			expect(wrapper.instance().photos.length).toEqual(pictures.length);
		});
	});

});
```

Write the component for `PhotoList.js`:

```
'use strict';

import React, { Component } from 'react';
import { 
	FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import Photo from './Photo.js';

class PhotoList extends Component {
	get photos() {
		return this.props.photos.map((photo, index) => {
			return {
				key: `photo-${index}`,
				img: photo.img,
				username: photo.username,
				author: photo.author,
			};
		});
	};

	render() {
		return (
			<FlatList 
				data={this.photos} 
				renderItem={({item}) => (<Photo uri={item.img} author={item.author} username={item.username} />)}
				/>
		);
	}
}

PhotoList.propTypes = {
	photos: PropTypes.array.isRequired,
};

PhotoList.defaultProps = {
	photos: [],
};

export default PhotoList;
```

### Lab: Create the Photo component

Now that we have gotten to this point, go ahead and TDD / write the Photo component. 

Here is what you should end up with:

In `__tests__/components/Photo.js`:

```
'use strict';

import React from 'react';
import {
	shallow,
} from 'enzyme';
import renderer from 'react-test-renderer';
import Photo from '../../components/Photo';

const createTestProps = () => ({

});

describe('<Photo />', () => {
	const wrapper = shallow(
		<Photo {...createTestProps()} />
	);

	describe('rendering', () => {
		it('renders correctly', () => {
			const tree = renderer.create(<Photo {...createTestProps()} />).toJSON();
		});

	});

	describe('interaction', () => {
		it('should return the correct image attributes', () => {
			const imgAttr = wrapper.instance().imageAttributes;
			expect(typeof imgAttr).toBe('object');
			expect(imgAttr.style.flex).toEqual(1);
			expect(imgAttr.style.height).toEqual(300);
		});

		it('should return author', () => {
			const author = wrapper.instance().author;
			expect(author.props.style.flex).toEqual(1);
			expect(author.props.style.flexDirection).toBe('row');
		});
	});

});
```

In `components/Photo.js`:

```
'use strict';

import React, { Component } from 'react';
import {
	Dimensions,
	View,
	Text,
	Image,
	StyleSheet,
} from 'react-native';
const {
	width,
} = Dimensions.get('screen');

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	authorRow: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
	},
	margin: {
		marginHorizontal: 8,
	},
	round: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	username: {
		fontSize: 15,
		fontWeight: 'bold',
	},
});

class Photo extends Component {
	get imageAttributes() {
		const {
			uri,
		} = this.props;

		return {
			style: {
				flex: 1,
				height: 300,
				width,
			},
			source: {
				uri,
			}
		};
	}

	get author() {
		const {
			author,
			username,	
		} = this.props;

		return <View style={styles['authorRow']}>
			<Image 
				style={[styles['round'], styles['margin']]} 
				source={{uri: author}} 
				/>
			<Text style={styles['username']}>{username}</Text>
		</View>
	}

	render() {
		return (
			<View style={styles['wrapper']}>
				{this.author}
				<Image {...this.imageAttributes} />
			</View>
		);
	}
}

export default Photo;
```

### Debugging

We can now run this in our console to be able to ramp up React Native devtools:

```
$ react-devtools
```

Now press `Command + D` in the Simulator and `Toggle the Inspector`. You will now be able to debug the individual elements. You can also try `Show Perf Monitor` to be able to see the performance of the application.

### AsynStorage

**AsyncStorage** is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app. 

On iOS, AsyncStorage is backed by native code that store small values in a serialized dictionary and larger values in separate files

On Android, AsyncStorage will use either RocksDB or SQLite based on what is available.

In `App.js`:

```
async componentDidMount() {
	await this.setItem('name', 'Stanley');
	await this.getItem('name');
}

async setItem(key, value) {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (err) {
		console.error(err);
	}
}

async getItem(key) {
	let item;
	try {
		item = await AsyncStorage.getItem(key);
	} catch (err) {
		console.error(err);
	}
	console.log('found item', item);
}
```

You can see the item being found in XCode console.

## Layout Animation

LayoutAnimation allows you to define mounting and update animations. They animate every property that changes in a component – usually by calling setState.

This is good option for when you want to apply the same animation for all properties or you don't know the specific values you are animating between. These are native animations and are mostly not affected by what is happening in JavaScript world during their execution.

```
'use strict';

import React, { Component } from 'react';
import {
	TouchableOpacity,
	LayoutAnimation,
	Dimensions,
	View,
	Text,
	Image,
	StyleSheet,
} from 'react-native';
const {
	width,
} = Dimensions.get('screen');

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	authorRow: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
	},
	margin: {
		marginHorizontal: 8,
	},
	round: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	username: {
		fontSize: 15,
		fontWeight: 'bold',
	},
});

class Photo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			s: 300,
		};
	}
	get imageAttributes() {
		const {
			uri,
		} = this.props;

		return {
			style: {
				flex: 1,
				height: this.state.s,
				width,
			},
			source: {
				uri,
			}
		};
	}

	get author() {
		const {
			author,
			username,	
		} = this.props;

		return <View style={styles['authorRow']}>
			<Image 
				style={[styles['round'], styles['margin']]} 
				source={{uri: author}} 
				/>
			<Text style={styles['username']}>{username}</Text>
		</View>
	}

	_onPress = () => {
		LayoutAnimation.spring();

		if (this.state.s > 300) {
			this.setState({
				s: this.state.s - 15,
			});
		} else {
			this.setState({
				s: this.state.s + 15,
			});
		}
	}

	render() {
		return (
			<View style={styles['wrapper']}>
				{this.author}
				<TouchableOpacity onPress={this._onPress}>
					<Image {...this.imageAttributes} />
				</TouchableOpacity>
			</View>
		);
	}
}

export default Photo;
```

### Lab: Try and create your own React Native app

Spend 1hr to create your own RN app. Make sure you TDD, style, and add animations to it! We will share our apps at the end of the session.

