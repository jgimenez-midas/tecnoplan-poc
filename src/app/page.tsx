import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className='min-h-screen bg-background p-8'>
      <div className='mx-auto max-w-4xl space-y-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-foreground mb-4'>Tecnoplant Theme Demo</h1>
          <p className='text-muted-foreground'>
            Showcasing the custom Tecnoplant color palette and status colors
          </p>
        </div>

        {/* Primary Colors */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-foreground'>Primary Colors</h2>
          <div className='grid grid-cols-5 gap-4'>
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div className='space-y-2' key={shade}>
                <div
                  className='h-16 rounded-lg border'
                  style={{ backgroundColor: `var(--tecnoplant-${String(shade)})` }}
                  title={`tecnoplant-${String(shade)}`}
                />
                <p className='text-xs text-muted-foreground text-center'>{shade}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-foreground'>Buttons</h2>
          <div className='flex flex-wrap gap-4'>
            <Button>Default Button</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='destructive'>Destructive</Button>
            <Button className='bg-tecnoplant-500 hover:bg-tecnoplant-600'>
              Tecnoplant Primary
            </Button>
          </div>
        </section>

        {/* Status Badges */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-foreground'>Status Badges</h2>
          <div className='flex flex-wrap gap-4'>
            <Badge status='despachado'>Despachado</Badge>
            <Badge status='en-revision'>En Revisión</Badge>
            <Badge status='pendiente'>Pendiente</Badge>
            <Badge status='procesado'>Procesado</Badge>
          </div>
        </section>

        {/* Status Colors */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-foreground'>Status Colors</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='space-y-2'>
              <div className='h-12 rounded-lg bg-status-despachado' />
              <p className='text-sm font-medium'>Despachado</p>
              <p className='text-xs text-muted-foreground'>Gray</p>
            </div>
            <div className='space-y-2'>
              <div className='h-12 rounded-lg bg-status-en-revision' />
              <p className='text-sm font-medium'>En Revisión</p>
              <p className='text-xs text-muted-foreground'>Yellow/Orange</p>
            </div>
            <div className='space-y-2'>
              <div className='h-12 rounded-lg bg-status-pendiente' />
              <p className='text-sm font-medium'>Pendiente</p>
              <p className='text-xs text-muted-foreground'>Blue</p>
            </div>
            <div className='space-y-2'>
              <div className='h-12 rounded-lg bg-status-procesado' />
              <p className='text-sm font-medium'>Procesado</p>
              <p className='text-xs text-muted-foreground'>Green</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
