// **********************************************************************
// Parsed By TarsParser(1.1.0), Generated By tars2node(20190529)
// TarsParser Maintained By <TARS> and tars2node Maintained By <superzheng>
// Generated from "Proxy.tars" by Client Mode
// **********************************************************************

/* eslint-disable */

"use strict";

var assert    = require("assert");
var TarsStream = require("@tars/stream");
var TarsError  = require("@tars/rpc").error;

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _makeError = function (data, message, type) {
    var error = new Error(message || "");
    error.request = data.request;
    error.response = {
        "costtime" : data.request.costtime
    };
    if (type === TarsError.CLIENT.DECODE_ERROR) {
        error.name = "DECODE_ERROR";
        error.response.error = {
            "code" : type,
            "message" : message
        };
    } else {
        error.name = "RPC_ERROR";
        error.response.error = data.error;
    }
    return error;
};

var bm = bm || {};
module.exports.bm = bm;

bm.ProxyProxy = function () {
    this._name    = undefined;
    this._worker  = undefined;
};

bm.ProxyProxy.prototype.setTimeout = function (iTimeout) {
    this._worker.timeout = iTimeout;
};

bm.ProxyProxy.prototype.getTimeout = function () {
    return this._worker.timeout;
};

bm.ProxyProxy.prototype.setVersion = function (iVersion) {
    this._worker.version = iVersion;
};

bm.ProxyProxy.prototype.getVersion = function () {
    return this._worker.version;
};

bm.ResultStat = function() {
    this.time_stamp = 0;
    this.ret_map = new TarsStream.Map(TarsStream.Int32, TarsStream.Int32);
    this.cost_map = new TarsStream.Map(TarsStream.Int32, TarsStream.Int32);
    this.total_request = 0;
    this.succ_request = 0;
    this.fail_request = 0;
    this.max_time = 0;
    this.min_time = 1000;
    this.total_time = 0;
    this.p999_time = 0;
    this.p99_time = 0;
    this.p90_time = 0;
    this.send_bytes = 0;
    this.recv_bytes = 0;
    this.avg_speed = 0;
    this._classname = "bm.ResultStat";
};
bm.ResultStat._classname = "bm.ResultStat";
bm.ResultStat._write = function (os, tag, value) { os.writeStruct(tag, value); };
bm.ResultStat._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
bm.ResultStat._readFrom = function (is) {
    var tmp = new bm.ResultStat;
    tmp.time_stamp = is.readInt64(0, false, 0);
    tmp.ret_map = is.readMap(1, false, TarsStream.Map(TarsStream.Int32, TarsStream.Int32));
    tmp.cost_map = is.readMap(2, false, TarsStream.Map(TarsStream.Int32, TarsStream.Int32));
    tmp.total_request = is.readInt64(3, false, 0);
    tmp.succ_request = is.readInt64(4, false, 0);
    tmp.fail_request = is.readInt64(5, false, 0);
    tmp.max_time = is.readDouble(6, false, 0);
    tmp.min_time = is.readDouble(7, false, 1000);
    tmp.total_time = is.readDouble(8, false, 0);
    tmp.p999_time = is.readDouble(9, false, 0);
    tmp.p99_time = is.readDouble(10, false, 0);
    tmp.p90_time = is.readDouble(11, false, 0);
    tmp.send_bytes = is.readInt64(12, false, 0);
    tmp.recv_bytes = is.readInt64(13, false, 0);
    tmp.avg_speed = is.readInt32(14, false, 0);
    return tmp;
};
bm.ResultStat.prototype._writeTo = function (os) {
    os.writeInt64(0, this.time_stamp);
    os.writeMap(1, this.ret_map);
    os.writeMap(2, this.cost_map);
    os.writeInt64(3, this.total_request);
    os.writeInt64(4, this.succ_request);
    os.writeInt64(5, this.fail_request);
    os.writeDouble(6, this.max_time);
    os.writeDouble(7, this.min_time);
    os.writeDouble(8, this.total_time);
    os.writeDouble(9, this.p999_time);
    os.writeDouble(10, this.p99_time);
    os.writeDouble(11, this.p90_time);
    os.writeInt64(12, this.send_bytes);
    os.writeInt64(13, this.recv_bytes);
    os.writeInt32(14, this.avg_speed);
};
bm.ResultStat.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
bm.ResultStat.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
bm.ResultStat.prototype.toObject = function() { 
    return {
        "time_stamp" : this.time_stamp,
        "ret_map" : this.ret_map.toObject(),
        "cost_map" : this.cost_map.toObject(),
        "total_request" : this.total_request,
        "succ_request" : this.succ_request,
        "fail_request" : this.fail_request,
        "max_time" : this.max_time,
        "min_time" : this.min_time,
        "total_time" : this.total_time,
        "p999_time" : this.p999_time,
        "p99_time" : this.p99_time,
        "p90_time" : this.p90_time,
        "send_bytes" : this.send_bytes,
        "recv_bytes" : this.recv_bytes,
        "avg_speed" : this.avg_speed
    };
};
bm.ResultStat.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "time_stamp") && (this.time_stamp = json.time_stamp);
    _hasOwnProperty.call(json, "ret_map") && (this.ret_map.readFromObject(json.ret_map));
    _hasOwnProperty.call(json, "cost_map") && (this.cost_map.readFromObject(json.cost_map));
    _hasOwnProperty.call(json, "total_request") && (this.total_request = json.total_request);
    _hasOwnProperty.call(json, "succ_request") && (this.succ_request = json.succ_request);
    _hasOwnProperty.call(json, "fail_request") && (this.fail_request = json.fail_request);
    _hasOwnProperty.call(json, "max_time") && (this.max_time = json.max_time);
    _hasOwnProperty.call(json, "min_time") && (this.min_time = json.min_time);
    _hasOwnProperty.call(json, "total_time") && (this.total_time = json.total_time);
    _hasOwnProperty.call(json, "p999_time") && (this.p999_time = json.p999_time);
    _hasOwnProperty.call(json, "p99_time") && (this.p99_time = json.p99_time);
    _hasOwnProperty.call(json, "p90_time") && (this.p90_time = json.p90_time);
    _hasOwnProperty.call(json, "send_bytes") && (this.send_bytes = json.send_bytes);
    _hasOwnProperty.call(json, "recv_bytes") && (this.recv_bytes = json.recv_bytes);
    _hasOwnProperty.call(json, "avg_speed") && (this.avg_speed = json.avg_speed);
    return this;
};
bm.ResultStat.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
bm.ResultStat.new = function () {
    return new bm.ResultStat();
};
bm.ResultStat.create = function (is) {
    return bm.ResultStat._readFrom(is);
};

bm.ExecItem = function() {
    this.servant = "";
    this.rpcfunc = "";
    this.threads = 0;
    this.links = 0;
    this.speed = 0;
    this._classname = "bm.ExecItem";
};
bm.ExecItem._classname = "bm.ExecItem";
bm.ExecItem._write = function (os, tag, value) { os.writeStruct(tag, value); };
bm.ExecItem._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
bm.ExecItem._readFrom = function (is) {
    var tmp = new bm.ExecItem;
    tmp.servant = is.readString(0, false, "");
    tmp.rpcfunc = is.readString(1, false, "");
    tmp.threads = is.readInt32(2, false, 0);
    tmp.links = is.readInt32(3, false, 0);
    tmp.speed = is.readInt32(4, false, 0);
    return tmp;
};
bm.ExecItem.prototype._writeTo = function (os) {
    os.writeString(0, this.servant);
    os.writeString(1, this.rpcfunc);
    os.writeInt32(2, this.threads);
    os.writeInt32(3, this.links);
    os.writeInt32(4, this.speed);
};
bm.ExecItem.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
bm.ExecItem.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
bm.ExecItem.prototype.toObject = function() { 
    return {
        "servant" : this.servant,
        "rpcfunc" : this.rpcfunc,
        "threads" : this.threads,
        "links" : this.links,
        "speed" : this.speed
    };
};
bm.ExecItem.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "servant") && (this.servant = json.servant);
    _hasOwnProperty.call(json, "rpcfunc") && (this.rpcfunc = json.rpcfunc);
    _hasOwnProperty.call(json, "threads") && (this.threads = json.threads);
    _hasOwnProperty.call(json, "links") && (this.links = json.links);
    _hasOwnProperty.call(json, "speed") && (this.speed = json.speed);
    return this;
};
bm.ExecItem.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
bm.ExecItem.new = function () {
    return new bm.ExecItem();
};
bm.ExecItem.create = function (is) {
    return bm.ExecItem._readFrom(is);
};

bm.NodeStat = function() {
    this.ipaddr = "";
    this.max_speed = 0;
    this.max_threads = 0;
    this.left_speed = 0;
    this.left_threads = 0;
    this.executors = new TarsStream.List(bm.ExecItem);
    this._classname = "bm.NodeStat";
};
bm.NodeStat._classname = "bm.NodeStat";
bm.NodeStat._write = function (os, tag, value) { os.writeStruct(tag, value); };
bm.NodeStat._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
bm.NodeStat._readFrom = function (is) {
    var tmp = new bm.NodeStat;
    tmp.ipaddr = is.readString(0, false, "");
    tmp.max_speed = is.readInt32(1, false, 0);
    tmp.max_threads = is.readInt32(2, false, 0);
    tmp.left_speed = is.readInt32(3, false, 0);
    tmp.left_threads = is.readInt32(4, false, 0);
    tmp.executors = is.readList(5, false, TarsStream.List(bm.ExecItem));
    return tmp;
};
bm.NodeStat.prototype._writeTo = function (os) {
    os.writeString(0, this.ipaddr);
    os.writeInt32(1, this.max_speed);
    os.writeInt32(2, this.max_threads);
    os.writeInt32(3, this.left_speed);
    os.writeInt32(4, this.left_threads);
    os.writeList(5, this.executors);
};
bm.NodeStat.prototype._equal = function (anItem) {
    return this.ipaddr === anItem.ipaddr;
};
bm.NodeStat.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
bm.NodeStat.prototype.toObject = function() { 
    return {
        "ipaddr" : this.ipaddr,
        "max_speed" : this.max_speed,
        "max_threads" : this.max_threads,
        "left_speed" : this.left_speed,
        "left_threads" : this.left_threads,
        "executors" : this.executors.toObject()
    };
};
bm.NodeStat.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "ipaddr") && (this.ipaddr = json.ipaddr);
    _hasOwnProperty.call(json, "max_speed") && (this.max_speed = json.max_speed);
    _hasOwnProperty.call(json, "max_threads") && (this.max_threads = json.max_threads);
    _hasOwnProperty.call(json, "left_speed") && (this.left_speed = json.left_speed);
    _hasOwnProperty.call(json, "left_threads") && (this.left_threads = json.left_threads);
    _hasOwnProperty.call(json, "executors") && (this.executors.readFromObject(json.executors));
    return this;
};
bm.NodeStat.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
bm.NodeStat.new = function () {
    return new bm.NodeStat();
};
bm.NodeStat.create = function (is) {
    return bm.NodeStat._readFrom(is);
};

bm.QueryRsp = function() {
    this.stat = new bm.ResultStat;
    this.ipaddr = "";
    this._classname = "bm.QueryRsp";
};
bm.QueryRsp._classname = "bm.QueryRsp";
bm.QueryRsp._write = function (os, tag, value) { os.writeStruct(tag, value); };
bm.QueryRsp._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
bm.QueryRsp._readFrom = function (is) {
    var tmp = new bm.QueryRsp;
    tmp.stat = is.readStruct(0, false, bm.ResultStat);
    tmp.ipaddr = is.readString(1, false, "");
    return tmp;
};
bm.QueryRsp.prototype._writeTo = function (os) {
    os.writeStruct(0, this.stat);
    os.writeString(1, this.ipaddr);
};
bm.QueryRsp.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
bm.QueryRsp.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
bm.QueryRsp.prototype.toObject = function() { 
    return {
        "stat" : this.stat.toObject(),
        "ipaddr" : this.ipaddr
    };
};
bm.QueryRsp.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "stat") && (this.stat.readFromObject(json.stat));
    _hasOwnProperty.call(json, "ipaddr") && (this.ipaddr = json.ipaddr);
    return this;
};
bm.QueryRsp.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
bm.QueryRsp.new = function () {
    return new bm.QueryRsp();
};
bm.QueryRsp.create = function (is) {
    return bm.QueryRsp._readFrom(is);
};

bm.TaskConf = function() {
    this.servant = "";
    this.rpcfunc = "";
    this.paralist = new TarsStream.List(TarsStream.String);
    this.paravals = new TarsStream.List(TarsStream.String);
    this.endpoints = new TarsStream.List(TarsStream.String);
    this.links = 0;
    this.speed = 0;
    this.runflag = 0;
    this._classname = "bm.TaskConf";
};
bm.TaskConf._classname = "bm.TaskConf";
bm.TaskConf._write = function (os, tag, value) { os.writeStruct(tag, value); };
bm.TaskConf._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
bm.TaskConf._readFrom = function (is) {
    var tmp = new bm.TaskConf;
    tmp.servant = is.readString(0, false, "");
    tmp.rpcfunc = is.readString(1, false, "");
    tmp.paralist = is.readList(2, false, TarsStream.List(TarsStream.String));
    tmp.paravals = is.readList(3, false, TarsStream.List(TarsStream.String));
    tmp.endpoints = is.readList(4, false, TarsStream.List(TarsStream.String));
    tmp.links = is.readInt32(5, false, 0);
    tmp.speed = is.readInt32(6, false, 0);
    tmp.runflag = is.readInt32(7, false, 0);
    return tmp;
};
bm.TaskConf.prototype._writeTo = function (os) {
    os.writeString(0, this.servant);
    os.writeString(1, this.rpcfunc);
    os.writeList(2, this.paralist);
    os.writeList(3, this.paravals);
    os.writeList(4, this.endpoints);
    os.writeInt32(5, this.links);
    os.writeInt32(6, this.speed);
    os.writeInt32(7, this.runflag);
};
bm.TaskConf.prototype._equal = function (anItem) {
    return this.servant === anItem.servant && 
        this.rpcfunc === anItem.rpcfunc;
};
bm.TaskConf.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
bm.TaskConf.prototype.toObject = function() { 
    return {
        "servant" : this.servant,
        "rpcfunc" : this.rpcfunc,
        "paralist" : this.paralist.toObject(),
        "paravals" : this.paravals.toObject(),
        "endpoints" : this.endpoints.toObject(),
        "links" : this.links,
        "speed" : this.speed,
        "runflag" : this.runflag
    };
};
bm.TaskConf.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "servant") && (this.servant = json.servant);
    _hasOwnProperty.call(json, "rpcfunc") && (this.rpcfunc = json.rpcfunc);
    _hasOwnProperty.call(json, "paralist") && (this.paralist.readFromObject(json.paralist));
    _hasOwnProperty.call(json, "paravals") && (this.paravals.readFromObject(json.paravals));
    _hasOwnProperty.call(json, "endpoints") && (this.endpoints.readFromObject(json.endpoints));
    _hasOwnProperty.call(json, "links") && (this.links = json.links);
    _hasOwnProperty.call(json, "speed") && (this.speed = json.speed);
    _hasOwnProperty.call(json, "runflag") && (this.runflag = json.runflag);
    return this;
};
bm.TaskConf.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
bm.TaskConf.new = function () {
    return new bm.TaskConf();
};
bm.TaskConf.create = function (is) {
    return bm.TaskConf._readFrom(is);
};

bm.TaskStat = function() {
    this.conf = new bm.TaskConf;
    this.state = 0;
    this.start_time = 0;
    this.fetch_time = 0;
    this.duration = 0;
    this.speed_quota = new TarsStream.Map(TarsStream.String, TarsStream.Int32);
    this._classname = "bm.TaskStat";
};
bm.TaskStat._classname = "bm.TaskStat";
bm.TaskStat._write = function (os, tag, value) { os.writeStruct(tag, value); };
bm.TaskStat._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
bm.TaskStat._readFrom = function (is) {
    var tmp = new bm.TaskStat;
    tmp.conf = is.readStruct(0, false, bm.TaskConf);
    tmp.state = is.readInt32(1, false, 0);
    tmp.start_time = is.readInt64(2, false, 0);
    tmp.fetch_time = is.readInt64(3, false, 0);
    tmp.duration = is.readInt64(4, false, 0);
    tmp.speed_quota = is.readMap(5, false, TarsStream.Map(TarsStream.String, TarsStream.Int32));
    return tmp;
};
bm.TaskStat.prototype._writeTo = function (os) {
    os.writeStruct(0, this.conf);
    os.writeInt32(1, this.state);
    os.writeInt64(2, this.start_time);
    os.writeInt64(3, this.fetch_time);
    os.writeInt64(4, this.duration);
    os.writeMap(5, this.speed_quota);
};
bm.TaskStat.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
bm.TaskStat.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
bm.TaskStat.prototype.toObject = function() { 
    return {
        "conf" : this.conf.toObject(),
        "state" : this.state,
        "start_time" : this.start_time,
        "fetch_time" : this.fetch_time,
        "duration" : this.duration,
        "speed_quota" : this.speed_quota.toObject()
    };
};
bm.TaskStat.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "conf") && (this.conf.readFromObject(json.conf));
    _hasOwnProperty.call(json, "state") && (this.state = json.state);
    _hasOwnProperty.call(json, "start_time") && (this.start_time = json.start_time);
    _hasOwnProperty.call(json, "fetch_time") && (this.fetch_time = json.fetch_time);
    _hasOwnProperty.call(json, "duration") && (this.duration = json.duration);
    _hasOwnProperty.call(json, "speed_quota") && (this.speed_quota.readFromObject(json.speed_quota));
    return this;
};
bm.TaskStat.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
bm.TaskStat.new = function () {
    return new bm.TaskStat();
};
bm.TaskStat.create = function (is) {
    return bm.TaskStat._readFrom(is);
};

bm.BenchmarkSummary = function() {
    this.nodes = new TarsStream.Map(TarsStream.String, bm.NodeStat);
    this.result = new TarsStream.Map(TarsStream.String, bm.ResultStat);
    this.total_result = new TarsStream.Map(TarsStream.String, bm.ResultStat);
    this.task = new TarsStream.Map(TarsStream.String, bm.TaskStat);
    this._classname = "bm.BenchmarkSummary";
};
bm.BenchmarkSummary._classname = "bm.BenchmarkSummary";
bm.BenchmarkSummary._write = function (os, tag, value) { os.writeStruct(tag, value); };
bm.BenchmarkSummary._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
bm.BenchmarkSummary._readFrom = function (is) {
    var tmp = new bm.BenchmarkSummary;
    tmp.nodes = is.readMap(0, false, TarsStream.Map(TarsStream.String, bm.NodeStat));
    tmp.result = is.readMap(1, false, TarsStream.Map(TarsStream.String, bm.ResultStat));
    tmp.total_result = is.readMap(2, false, TarsStream.Map(TarsStream.String, bm.ResultStat));
    tmp.task = is.readMap(3, false, TarsStream.Map(TarsStream.String, bm.TaskStat));
    return tmp;
};
bm.BenchmarkSummary.prototype._writeTo = function (os) {
    os.writeMap(0, this.nodes);
    os.writeMap(1, this.result);
    os.writeMap(2, this.total_result);
    os.writeMap(3, this.task);
};
bm.BenchmarkSummary.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
bm.BenchmarkSummary.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
bm.BenchmarkSummary.prototype.toObject = function() { 
    return {
        "nodes" : this.nodes.toObject(),
        "result" : this.result.toObject(),
        "total_result" : this.total_result.toObject(),
        "task" : this.task.toObject()
    };
};
bm.BenchmarkSummary.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "nodes") && (this.nodes.readFromObject(json.nodes));
    _hasOwnProperty.call(json, "result") && (this.result.readFromObject(json.result));
    _hasOwnProperty.call(json, "total_result") && (this.total_result.readFromObject(json.total_result));
    _hasOwnProperty.call(json, "task") && (this.task.readFromObject(json.task));
    return this;
};
bm.BenchmarkSummary.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
bm.BenchmarkSummary.new = function () {
    return new bm.BenchmarkSummary();
};
bm.BenchmarkSummary.create = function (is) {
    return bm.BenchmarkSummary._readFrom(is);
};

bm.BenchmarkUnit = function() {
    this.owner = "";
    this.servant = "";
    this.rpcfunc = "";
    this.para_input = "";
    this.para_value = "";
    this.para_output = "";
    this.endpoints = new TarsStream.List(TarsStream.String);
    this.links = 0;
    this.speed = 0;
    this.duration = 0;
    this._classname = "bm.BenchmarkUnit";
};
bm.BenchmarkUnit._classname = "bm.BenchmarkUnit";
bm.BenchmarkUnit._write = function (os, tag, value) { os.writeStruct(tag, value); };
bm.BenchmarkUnit._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
bm.BenchmarkUnit._readFrom = function (is) {
    var tmp = new bm.BenchmarkUnit;
    tmp.owner = is.readString(0, false, "");
    tmp.servant = is.readString(1, false, "");
    tmp.rpcfunc = is.readString(2, false, "");
    tmp.para_input = is.readString(3, false, "");
    tmp.para_value = is.readString(4, false, "");
    tmp.para_output = is.readString(5, false, "");
    tmp.endpoints = is.readList(6, false, TarsStream.List(TarsStream.String));
    tmp.links = is.readInt32(7, false, 0);
    tmp.speed = is.readInt32(8, false, 0);
    tmp.duration = is.readInt32(9, false, 0);
    return tmp;
};
bm.BenchmarkUnit.prototype._writeTo = function (os) {
    os.writeString(0, this.owner);
    os.writeString(1, this.servant);
    os.writeString(2, this.rpcfunc);
    os.writeString(3, this.para_input);
    os.writeString(4, this.para_value);
    os.writeString(5, this.para_output);
    os.writeList(6, this.endpoints);
    os.writeInt32(7, this.links);
    os.writeInt32(8, this.speed);
    os.writeInt32(9, this.duration);
};
bm.BenchmarkUnit.prototype._equal = function (anItem) {
    return this.servant === anItem.servant && 
        this.rpcfunc === anItem.rpcfunc;
};
bm.BenchmarkUnit.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
bm.BenchmarkUnit.prototype.toObject = function() { 
    return {
        "owner" : this.owner,
        "servant" : this.servant,
        "rpcfunc" : this.rpcfunc,
        "para_input" : this.para_input,
        "para_value" : this.para_value,
        "para_output" : this.para_output,
        "endpoints" : this.endpoints.toObject(),
        "links" : this.links,
        "speed" : this.speed,
        "duration" : this.duration
    };
};
bm.BenchmarkUnit.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "owner") && (this.owner = json.owner);
    _hasOwnProperty.call(json, "servant") && (this.servant = json.servant);
    _hasOwnProperty.call(json, "rpcfunc") && (this.rpcfunc = json.rpcfunc);
    _hasOwnProperty.call(json, "para_input") && (this.para_input = json.para_input);
    _hasOwnProperty.call(json, "para_value") && (this.para_value = json.para_value);
    _hasOwnProperty.call(json, "para_output") && (this.para_output = json.para_output);
    _hasOwnProperty.call(json, "endpoints") && (this.endpoints.readFromObject(json.endpoints));
    _hasOwnProperty.call(json, "links") && (this.links = json.links);
    _hasOwnProperty.call(json, "speed") && (this.speed = json.speed);
    _hasOwnProperty.call(json, "duration") && (this.duration = json.duration);
    return this;
};
bm.BenchmarkUnit.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
bm.BenchmarkUnit.new = function () {
    return new bm.BenchmarkUnit();
};
bm.BenchmarkUnit.create = function (is) {
    return bm.BenchmarkUnit._readFrom(is);
};

var __bm_Proxy$query$IF = {
    "name" : "query",
    "return" : "int32",
    "arguments" : [{
        "name" : "req",
        "class" : "bm.BenchmarkUnit",
        "direction" : "in"
    }, {
        "name" : "stat",
        "class" : "bm.ResultStat",
        "direction" : "out"
    }]
};

var __bm_Proxy$query$IE = function (req) {
    var os = new TarsStream.TarsOutputStream();
    os.writeStruct(1, req);
    return os.getBinBuffer();
};

var __bm_Proxy$query$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0),
                "arguments" : {
                    "stat" : is.readStruct(2, true, bm.ResultStat)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __bm_Proxy$query$PE = function (req, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeStruct("req", req);
    return tup;
};

var __bm_Proxy$query$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0),
                "arguments" : {
                    "stat" : tup.readStruct("stat", bm.ResultStat)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __bm_Proxy$query$ER = function (data) {
    throw _makeError(data, "Call Proxy::query failed");
};

bm.ProxyProxy.prototype.query = function (req) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("query", __bm_Proxy$query$PE(req, version), arguments[arguments.length - 1], __bm_Proxy$query$IF).then(__bm_Proxy$query$PD, __bm_Proxy$query$ER);
    } else {
        return this._worker.tars_invoke("query", __bm_Proxy$query$IE(req), arguments[arguments.length - 1], __bm_Proxy$query$IF).then(__bm_Proxy$query$ID, __bm_Proxy$query$ER);
    }
};
bm.ProxyProxy.query = __bm_Proxy$query$IF;

var __bm_Proxy$shutdown$IF = {
    "name" : "shutdown",
    "return" : "int32",
    "arguments" : [{
        "name" : "req",
        "class" : "bm.BenchmarkUnit",
        "direction" : "in"
    }, {
        "name" : "stat",
        "class" : "bm.ResultStat",
        "direction" : "out"
    }]
};

var __bm_Proxy$shutdown$IE = function (req) {
    var os = new TarsStream.TarsOutputStream();
    os.writeStruct(1, req);
    return os.getBinBuffer();
};

var __bm_Proxy$shutdown$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0),
                "arguments" : {
                    "stat" : is.readStruct(2, true, bm.ResultStat)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __bm_Proxy$shutdown$PE = function (req, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeStruct("req", req);
    return tup;
};

var __bm_Proxy$shutdown$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0),
                "arguments" : {
                    "stat" : tup.readStruct("stat", bm.ResultStat)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __bm_Proxy$shutdown$ER = function (data) {
    throw _makeError(data, "Call Proxy::shutdown failed");
};

bm.ProxyProxy.prototype.shutdown = function (req) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("shutdown", __bm_Proxy$shutdown$PE(req, version), arguments[arguments.length - 1], __bm_Proxy$shutdown$IF).then(__bm_Proxy$shutdown$PD, __bm_Proxy$shutdown$ER);
    } else {
        return this._worker.tars_invoke("shutdown", __bm_Proxy$shutdown$IE(req), arguments[arguments.length - 1], __bm_Proxy$shutdown$IF).then(__bm_Proxy$shutdown$ID, __bm_Proxy$shutdown$ER);
    }
};
bm.ProxyProxy.shutdown = __bm_Proxy$shutdown$IF;

var __bm_Proxy$startup$IF = {
    "name" : "startup",
    "return" : "int32",
    "arguments" : [{
        "name" : "req",
        "class" : "bm.BenchmarkUnit",
        "direction" : "in"
    }]
};

var __bm_Proxy$startup$IE = function (req) {
    var os = new TarsStream.TarsOutputStream();
    os.writeStruct(1, req);
    return os.getBinBuffer();
};

var __bm_Proxy$startup$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0)
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __bm_Proxy$startup$PE = function (req, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeStruct("req", req);
    return tup;
};

var __bm_Proxy$startup$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0)
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __bm_Proxy$startup$ER = function (data) {
    throw _makeError(data, "Call Proxy::startup failed");
};

bm.ProxyProxy.prototype.startup = function (req) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("startup", __bm_Proxy$startup$PE(req, version), arguments[arguments.length - 1], __bm_Proxy$startup$IF).then(__bm_Proxy$startup$PD, __bm_Proxy$startup$ER);
    } else {
        return this._worker.tars_invoke("startup", __bm_Proxy$startup$IE(req), arguments[arguments.length - 1], __bm_Proxy$startup$IF).then(__bm_Proxy$startup$ID, __bm_Proxy$startup$ER);
    }
};
bm.ProxyProxy.startup = __bm_Proxy$startup$IF;

var __bm_Proxy$test$IF = {
    "name" : "test",
    "return" : "int32",
    "arguments" : [{
        "name" : "req",
        "class" : "bm.BenchmarkUnit",
        "direction" : "in"
    }, {
        "name" : "rsp",
        "class" : "string",
        "direction" : "out"
    }, {
        "name" : "errmsg",
        "class" : "string",
        "direction" : "out"
    }]
};

var __bm_Proxy$test$IE = function (req) {
    var os = new TarsStream.TarsOutputStream();
    os.writeStruct(1, req);
    return os.getBinBuffer();
};

var __bm_Proxy$test$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0),
                "arguments" : {
                    "rsp" : is.readString(2, true, ""),
                    "errmsg" : is.readString(3, true, "")
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __bm_Proxy$test$PE = function (req, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeStruct("req", req);
    return tup;
};

var __bm_Proxy$test$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0),
                "arguments" : {
                    "rsp" : tup.readString("rsp"),
                    "errmsg" : tup.readString("errmsg")
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __bm_Proxy$test$ER = function (data) {
    throw _makeError(data, "Call Proxy::test failed");
};

bm.ProxyProxy.prototype.test = function (req) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("test", __bm_Proxy$test$PE(req, version), arguments[arguments.length - 1], __bm_Proxy$test$IF).then(__bm_Proxy$test$PD, __bm_Proxy$test$ER);
    } else {
        return this._worker.tars_invoke("test", __bm_Proxy$test$IE(req), arguments[arguments.length - 1], __bm_Proxy$test$IF).then(__bm_Proxy$test$ID, __bm_Proxy$test$ER);
    }
};
bm.ProxyProxy.test = __bm_Proxy$test$IF;



