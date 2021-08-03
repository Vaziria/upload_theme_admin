import * as event from 'events'
import { IAlertEvent } from './type/alert'

const eventEmitter = new event.EventEmitter()

type Event = IAlertEvent

export function registListener<K extends keyof Event>(tipe: K, listener: (data: Event[K]) => unknown ): event.EventEmitter {
  return eventEmitter.on(tipe as string, listener)
}

export function removeListener<K extends keyof Event>(tipe: K, listener: (data: Event[K]) => unknown): void {
  eventEmitter.removeListener(tipe as string, listener)
}

export function emitEvent<K extends keyof Event>(tipe: K, payload: Event[ K ]): void {
  eventEmitter.emit(tipe, payload)
}
