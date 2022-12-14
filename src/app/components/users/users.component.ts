import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  pageTitle: string = 'Request';
  imageWidth: number = 50;
  imageMargin: number = 2;
 
  settings = {
    add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      columns: {
          id: {
              title: 'ID'
          },
          name: {
              title: 'Full Name'
          },
          username: {
              title: 'User Name'
          },
          email: {
              title: 'Email'
          },
          status: {
            title: 'Status'
          }
      }
  };
  data = [
      {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          status: "admin"
      },
      {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          status: "Parent"
      },

      // ... list of items

      {
          id: 11,
          name: "Nicholas DuBuque",
          username: "Nicholas.Stanton",
          email: "Rey.Padberg@rosamond.biz",
          status: "enseignant"
      }
  ];

  Users: any;
  constructor(private api: UsersService) { 
    this.api.getUsers().subscribe(data => {
        this.Users = data;
      });
  }

  ngOnInit(): void {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
