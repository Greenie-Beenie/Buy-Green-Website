import React from 'react'
import PropTypes from 'prop-types';
import { 
    EuiTitle,
    EuiAvatar,
    EuiFlexGroup, 
    EuiFlexItem
} from '@elastic/eui';

function AvatarList(props) {
    return (
        <div>
            <EuiFlexGroup justifyContent="center">
                {props.avatars.map((avatar) => (
                    <EuiFlexItem style={{ maxWidth: '15em' }}>
                        <div>
                            <EuiAvatar name={avatar.name} imageUrl={avatar.url} size="xl"/>
                        </div>
                        <div>
                            <EuiTitle size="xs">
                                <p>{avatar.name}</p>
                            </EuiTitle>
                        </div>
                    </EuiFlexItem>
                ))}

            </EuiFlexGroup>
        </div>
    )
}

AvatarList.propTypes = {
    avatars: PropTypes.array.isRequired
}

export default AvatarList
