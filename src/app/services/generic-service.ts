
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T extends { id?: string }> {
  private collection!: AngularFirestoreCollection<T>;

  constructor(private afs: AngularFirestore) {}

  init(collectionPath: string) {
    this.collection = this.afs.collection<T>(collectionPath);
  }

  getAll(): Observable<T[]> {
    return this.collection.valueChanges({ idField: 'id' });
  }

  getById(id: string): Observable<T | undefined> {
    return this.collection.doc<T>(id).valueChanges();
  }

  add(item: T): Observable<T> {
  const id = this.afs.createId();
  const newItem = { ...item, id };

  return from(this.collection.doc(id).set(newItem)).pipe(
    map(() => newItem)
  );
}

  update(id: string, data: Partial<T>): Promise<void> {
    return this.collection.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.collection.doc(id).delete();
  }
}
