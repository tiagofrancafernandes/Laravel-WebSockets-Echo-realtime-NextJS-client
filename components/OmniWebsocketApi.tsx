/* components/OmniWebsocketApi.js */

import React, { Component, Fragment } from 'react';
// import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { start } from 'repl';

class OmniWebsocketApi {
    pusher = new Pusher('my_pusher_key_12', {
        cluster: 'mt1',
        wsHost: '0.0.0.0',
        wsPort: 6001,
        forceTLS: false,
        disableStats: true,
        auth: {
            headers: {
                'Authorization': 'Bearer IQgkEVsGNEyCV18Bgb4JwDFu37Ur3qVJIieKo8uz',
            },
        },
        authEndpoint: `http://0.0.0.0:8000/broadcasting-auth-api`,
    });

    constructor () {
        console.log('OmniWebsocketApi.component');
    }

    subscribeToPrivate(chanel: string, event: string, callback: any) {
        this.getInstance().private(chanel).listen(event, callback);
    }

    getInstance() {
        return (new Echo({
            broadcaster: 'pusher',
            key: 'my_pusher_key_12',
            client: this.pusher,
        }));
    }
}

// OmniWebsocketApi.displayName = 'OmniWebsocketApi';

export default OmniWebsocketApi;
