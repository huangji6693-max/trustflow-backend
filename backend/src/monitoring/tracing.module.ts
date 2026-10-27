import { Module } from '@nestjs/common';
import { initTracing } from './tracing';
import { TracingService } from './tracing.service';

export { TracingService };

@Module({
  providers: [TracingService],
  exports: [TracingService],
})
export class TracingModule {
  constructor() {
    initTracing();
  }
}
