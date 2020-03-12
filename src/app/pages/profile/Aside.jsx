import React from 'react';

export default function Aside() {
    return (
        <>
            {/* Begin:: App Aside Mobile Toggle*/}
            <button className="kt-app__aside-close">
                <i className="la la-close" />
            </button>
            {/* End:: App Aside Mobile Toggle */}
            {/* Begin:: App Aside */}
            <div className="kt-grid__item kt-app_toggle kt-app__aside">
                <div className="kt-portlet kt-portlet--height-fluid-">
                    <div className="kt-portlet__head kt-portlet__head--noborder">
                        <div className="kt-portlet__head-label">
                            <h3 className="kt-portlet__head-title kt-hidden">Head Title</h3>
                        </div>
                        <div className="kt-portlet__head-toolbar">{/** TODO */}</div>
                    </div>
                    <div className="kt-portlet__body">
                        <div className="kt-widget kt-widget--user-profile-2">
                            <div className="kt-widget__head">
                                <div className="kt-widget__media">
                                    <img
                                        className="kt-widget__img kt-hidden"
                                        src="https://picsum.photos/90"
                                        alt="profile"
                                    />
                                    <div className="kt-widget__pic kt-widget__pic--danger kt-font-danger kt-font-boldest kt-font-light kt-hidden-">RB</div>
                                </div>
                                <div className="kt-widget__info">
                                    <a href="/" className="kt-widget__username">Ronald Burns</a>
                                    <span class="kt-widget__desc">Tier 2 Tech</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End:: App Aside */}
        </>
    );
}
