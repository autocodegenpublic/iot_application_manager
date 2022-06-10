

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

let authToken = "empty";
let uiqueId = Date.now();

chai.use(chaiHttp);

describe("pollution_monitoring", () =>{

    it("sign_up", (done) =>{
    
        let userObject = {
            email : "test@test",
            userName : "test",
            password : "123456"
        }

        chai.request(server)
        .post('/user/signup')
        .send(userObject)
        .end((err,res) => {
            res.should.not.have.status(500);
            done();
        });
    }).timeout(5000);



    it("login", (done) =>{
  
        let userObject = {
            email : "test@test",
            password : "123456"
        }

        chai.request(server)
        .post('/user/login')
        .send(userObject)
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.have.property('message').eql("success");
            authToken = res.body.token;
            done();
        });
    }).timeout(10000);


    it("post_one", (done) =>{
        let object = {
                       unique_pollution_sensor_id :uiqueId,  
                       pollution_sens_deployment_id : "",
                       pollution_sensor_value : "",
                       pollution_sensor_meta_data : "",
               
           }
        chai.request(server)
        .post('/pollution_monitoring/post_pollution_monitoring_data')
        .query({unique_pollution_sensor_id : uiqueId,jwtToken : authToken})
        .send(object)
        .end((err,res) =>{
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



     it("get_one", (done) =>{
        chai.request(server)
        .get('/pollution_monitoring/get_one_pollution_monitoring_data')
        .query({unique_pollution_sensor_id : uiqueId,jwtToken : authToken})
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



    it("update_one", (done) =>{
        let object = {
                       unique_pollution_sensor_id :uiqueId,  
                       pollution_sens_deployment_id : "",
                       pollution_sensor_value : "",
                       pollution_sensor_meta_data : "",
               
        }
        chai.request(server)
        .patch('/pollution_monitoring/update_one_pollution_monitoring_data')
        .query({unique_pollution_sensor_id : uiqueId,jwtToken : authToken})
        .send(object)
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



     it("get_all", (done) =>{
        chai.request(server)
        .get('/pollution_monitoring/get_all_pollution_monitoring_data')
        .query({unique_pollution_sensor_id : uiqueId,jwtToken : authToken})
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



    it("delete_one", (done) =>{
        chai.request(server)
        .delete('/pollution_monitoring/delete_one_pollution_monitoring_data')
        .query({unique_pollution_sensor_id: uiqueId,jwtToken : authToken})
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });

});
