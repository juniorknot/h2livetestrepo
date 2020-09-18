import React, {Component} from 'react';
import ReactNativeVideo from 'react-native-video';
import {View} from 'react-native';
import md5 from 'md5';

class Video extends Component {
    // state = {
    //     streams: null,
    //     source: null
    // };
    //
    // componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
    //     // New Streams loaded, choose source
    //     if(prevState.streams !== this.state.streams) {
    //         this.chooseHighestBitrate();
    //     }
    //
    //     // Customer changed stream, load new stream
    //     if(prevProps.stream !== this.props.stream && this.state.source !== null) {
    //         this.setState({
    //             source: null
    //         });
    //         this.fetchStreams();
    //     }
    // }
    //
    // componentDidMount() {
    //     // Get initial streams
    //     this.fetchStreams();
    // }
    //
    // chooseHighestBitrate = () => {
    //     const bitrates = Object.keys(this.state.streams);
    //
    //     const highestBitrate = bitrates.reduce(
    //         (currVal, oldVal) =>
    //             parseInt(currVal) > parseInt(oldVal) ? currVal : oldVal
    //     );
    //
    //     const source = this.state.streams[highestBitrate].source;
    //
    //     this.setState({
    //         source: source
    //     });
    // }
    //
    // fetchStreams = async () => {
    //     const now = new Date();
    //     const time = Math.floor(now.getTime() / 1000);
    //
    //     const url = 'https://stream.robertsstream.com/h2live/jsinjected/1.3.7.3/streamapi.php?';
    //
    //     let params = '';
    //     params += 't=' + time;
    //     params += '&stream=' + this.props.stream;
    //     params += '&referer=' + this.props.cust;
    //     params += '&h=' + md5(time + this.props.privateKey + this.props.stream);
    //     // params += '&hd=1';
    //
    //     const apiRequest = fetch(
    //         url + params,
    //         {
    //             method: 'GET',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //         },
    //     );
    //
    //     const apiResponse = await apiRequest;
    //
    //     const jsonResponse = await apiResponse.json();
    //
    //     if(
    //         jsonResponse.formats &&
    //         jsonResponse.formats.iosh2live &&
    //         jsonResponse.formats.iosh2live.streams &&
    //         Object.keys(jsonResponse.formats.iosh2live.streams).length
    //     ) {
    //         const streams = jsonResponse.formats.iosh2live.streams;
    //         this.setState({
    //             streams: streams
    //         });
    //     }
    //
    //     console.log("Response : ", jsonResponse);
    // };

    render() {
        return (<></>);
        // if (!this.state.source) {
        //     return (<View style={this.props.style}/>);
        // }
        //
        // return (
        //     <ReactNativeVideo
        //         {...this.props}
        //         source={{
        //             uri: this.state.source
        //         }}
        //     />
        // );
    }
}

export default Video;
