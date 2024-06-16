import React from 'react'

export async function generateStaticParams() {
  const { projects } = await import('@/app/data/projects');

  return projects.map(project  => ({
    slug: project.slug
  }))
}

export default function Project({ params }) {
  return (
    <main className='mt-14 lg:mt-0 px-5 max-w-[1300px] mx-auto'>
      <p className='text-white'>{params.slug}</p>
      
    </main>
  )
}
