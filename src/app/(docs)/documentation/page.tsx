import { FC } from 'react'

import type {Metadata} from 'next'
import LargeHeadingProps from '@/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import DocumentationTabs from '@/components/DocumentationTabs'

import 'simplebar-react/dist/simplebar.min.css'

export const metadata: Metadata = {
    title: 'Similar API | Documentation',
    description: 'Free & open source similar text API'
}

const page = ({}) => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
        <div className="flex flex-col items-center gap-6">
            <LargeHeadingProps>Making a request</LargeHeadingProps>
            <Paragraph>api/v1/similarity</Paragraph>

            <DocumentationTabs />
        </div>
    </div>
  )
}

export default page