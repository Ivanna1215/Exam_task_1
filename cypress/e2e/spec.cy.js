import { faker } from '@faker-js/faker';
describe('API Tests', () => {

  it('Get all posts. Verify HTTP response status code and content type.', () => {
    cy.request('POST', '/posts').then((response) => {
      expect(response.status).to.eq(201);
      expect(response.headers['content-type']).to.include('application/json');
    });
  });

  it('Get only first 10 posts. Verify HTTP response status code and content.', () => {
    cy.request({
      url: '/posts',
      qs: { _limit: 10 }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length(10);
    });
  });

  it('Get posts with id = 55 and id = 60. Verify HTTP response status code and content.', () => {
    cy.request({
      url: '/posts'
    }).then((response) => {
      response.body.forEach(post => {
        if (post.id === 55) {
          cy.log(post.id + ' ' + post.title);
          expect(post.id).to.eq(55);
        } else if (post.id === 60) {
          cy.log(post.id + ' ' + post.title);
          expect(post.id).to.eq(60);
        }
      });
    });
  });

  it('Create a post. Verify HTTP response status code.', () => {
    cy.request({
      method: 'POST',
      url: '/664/posts',
      body: {
        title: 'New Post',
        author: 'Ivanna'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  it('Create a post with token. Verify HTTP response status code and content.', () => {
    cy.request({
      method: 'POST',
      url: '/register',
      body: {
        email: faker.internet.email(),
        password: faker.internet.password()
      }
    }).then((response) => {
      cy.log(response.body.accessToken)
      let token = response.body.accessToken
      cy.request({
        method: 'POST',
        url: '/664/posts',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: {
          title: 'New Post',
          author: 'Ivanna'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
      });

    });
  })

  it('Create post entity and verify creation. Verify HTTP response status code.', () => {
    cy.request({
      method: 'POST',
      url: '/posts',
      body: {
        title: 'New Post',
        author: 'Ivanna'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
    });
  });

  it('Update non-existing entity. Verify HTTP response status code.', () => {
    cy.request({
      method: 'PUT',
      url: '/posts/9999',
      body: {
        title: 'Updated Post',
        author: 'Ivanna'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('Create and update post entity. Verify HTTP response status code and content.', () => {
    cy.request({
      method: 'POST',
      url: '/posts',
      body: {
        title: 'New Post',
        author: 'Ivanna'
      }
    }).then((postResponse) => {
      expect(postResponse.status).to.eq(201);
      const postId = postResponse.body.id;

      cy.request({
        method: 'PUT',
        url: `/posts/${postId}`,
        body: {
          title: 'Updated Post',
          author: 'Ivanna'
        }
      }).then((updateResponse) => {
        expect(updateResponse.status).to.eq(200);
        expect(updateResponse.body.title).to.eq('Updated Post');
      });
    });
  });

  it('Delete non-existing post entity. Verify HTTP response status code.', () => {
    cy.request({
      method: 'DELETE',
      url: `/posts/9999`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('Create, update and delete post entity. Verify HTTP response status code and content.', () => {
    cy.request({
      method: 'POST',
      url: `/posts`,
      body: {
        title: 'New Post',
        author: 'Ivanna'
      }
    }).then((postResponse) => {
      expect(postResponse.status).to.eq(201);
      const postId = postResponse.body.id;

      cy.request({
        method: 'PUT',
        url: `/posts/${postId}`,
        body: {
          title: 'Updated Post',
          author: 'Ivanna'
        }
      }).then((updateResponse) => {
        expect(updateResponse.status).to.eq(200);

        cy.request({
          method: 'DELETE',
          url: `/posts/${postId}`
        }).then((deleteResponse) => {
          expect(deleteResponse.status).to.eq(200);
        });
      });
    });
  });
});