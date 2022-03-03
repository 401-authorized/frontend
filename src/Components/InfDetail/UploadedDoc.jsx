import { Button, Text } from '@mantine/core'
import React from 'react'

function UploadedDoc({document}) {
    return (
        <a href={document}><Text>Download Document</Text></a>
    )
}

export default UploadedDoc
