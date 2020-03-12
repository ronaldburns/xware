import React, { Component, Suspense } from 'react';
import { LayoutSplashScreen } from '../../../_metronic';
import Aside from './Aside';

class Profile extends Component {
    componentDidMount() {
        console.log('Profile Page');
    }

    render() {
        return (
            <Suspense fallback={<LayoutSplashScreen />}>
                <div className="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">
                    <Aside />
                </div>
            </Suspense>
        );
    }
}

export default Profile;
