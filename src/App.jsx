import { MapView } from './components/map-view/map-view.component';
import { IPContent } from './components/ip-content/ip-content.component';

import './App.scss';

const App = () => {
    return (
      <div className='app-container'>
          <IPContent/>
          <MapView/>
      </div>
    );
}

export { App };
