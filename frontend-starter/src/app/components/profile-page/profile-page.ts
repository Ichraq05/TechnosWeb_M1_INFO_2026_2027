import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  imports: [ReactiveFormsModule],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePageComponent implements OnInit {
  readonly auth = inject(AuthService);
  readonly error = signal('');

  readonly form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.auth.profile().subscribe({
      next: (user) => {
        this.form.setValue({ name: user.name });
      },
      error: () => {
        this.error.set('Impossible de charger le profil');
      },
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.error.set('Le nom est obligatoire');
      return;
    }

    this.auth.update(this.form.getRawValue().name).subscribe({
      error: () => {
        this.error.set('Impossible de modifier le profil');
      },
    });
  }
}