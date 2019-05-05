import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


export default function setUpProfileTests() {
  const validProfile = {
    username: 'ah_user7',
    first_name: null,
    last_name: null,
    bio: '',
    image: 'image/upload/t_media_lib_thumb/v1554230107/samples/people/boy-snow-hoodie.jpg',
    image_url: 't_media_lib_thumb/v1554230107/samples/people/boy-snow-hoodie',
    my_highlights: [],
    website: '',
    city: '',
    phone: '0',
    country: '',
    highlights_on_my_articles: [],
  };

  const getProfileSuccessResponse = {
    message: 'Your Profile details.',
    profile: validProfile,
  };

  const getProfileErrorResponse = {
    errors: {detail: 'Authorization credentials were not provided'},
  };

  const initialProfileState = {
    auth: {
      authenticated: true,
      user: {
        username: 'ah_user7',
        email: 'ah_user6@mailinator.com',
      },
    },
    profile: {
      current_profile: validProfile,
      errorMessage: {},
      message: '',
      loading: false,
    },
  };


  return {
    initialProfileState,
    validProfile,
    getProfileSuccessResponse,
    getProfileErrorResponse,
  };
}
