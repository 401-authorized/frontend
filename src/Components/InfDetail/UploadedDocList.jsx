import { Group } from '@mantine/core'
import React from 'react'
import UploadedDoc from './UploadedDoc'

function UploadedDocList({documents}) {
    return (
        <Group>
        {documents.map((document) => {
            <UploadedDoc document />
        })}
        </Group>
    )
}

export default UploadedDocList
