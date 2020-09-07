import React, { Component } from 'react'
import styled from 'styled-components'

import { Title } from '../../components'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const WrapperFull = styled.div`
    width: 480px;
    height: 320px;
    padding: 20px;
    border-radius: 20px;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    background-color: white;
`

class Login extends Component {

    renderFull = () => {
        return (
            <WrapperFull>
                <p>lol</p>
            </WrapperFull>
        )
    }

    render() {
        return (
            <Wrapper>
                {this.renderFull()}
            </Wrapper>
        )
    }
}

export default Login
